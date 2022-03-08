import { reactive, ref, shallowReactive } from "vue";
import { Form, Modal } from "@arco-design/web-vue";
import { useI18n } from "vue-i18n";

type FormModel = Record<string, unknown>;
type FormInstance = InstanceType<typeof Form>;

class ValidationError extends Error {
  public constructor() {
    super("ValidationError");
  }
}

export class FieldError extends ValidationError {
  public errors;

  public constructor(errors: { field: string; message: string }[]) {
    super();
    this.errors = errors;
  }
}

export class AlertError extends ValidationError {
  public title;
  public message;

  public constructor(message: string, title?: string) {
    super();
    this.message = message;
    this.title = title;
  }
}

const I18nMessages = {
  en: {
    "modal-text-ok": "OK",
    "modal-title-default": "An Error Occurred",
  },
  zh: {
    "modal-text-ok": "确定",
    "modal-title-default": "发生错误",
  },
};

/**
 * Arco-design form component helper.
 * Passing a initial value and submit handler and return a form binder.
 *
 * - Disable form when submitting
 * - Catch validation errors @see {ValidationError} and set field status
 *
 * @param initial
 * @param onSubmit
 * @returns binder
 * @example
 *
 * ```vue
 * <script setup>
 *  const form = useForm({ name: '' }, (val) => {...})
 * </script>
 *
 * <template>
 *  <a-form v-bind="form">
 *    ...
 *  </a-form>
 * </template>
 * ```
 *
 */
export function useForm<T extends FormModel>(
  initial: T,
  onSubmit?: (val: T) => Promise<void> | void
) {
  const { t } = useI18n({
    messages: I18nMessages,
  });
  const formRef = ref<FormInstance | null>(null);
  const data = reactive(initial);

  const onSubmitSuccess = onSubmit
    ? async (value: T) => {
        state.disabled = true;
        try {
          await onSubmit(value);
        } catch (error: unknown) {
          if (error instanceof AlertError) {
            Modal.error({
              title: error.title || t("modal-title-default"),
              content: error.message,
              okText: t("modal-text-ok"),
            });
          }
          // field error
          else if (error instanceof FieldError) {
            const form = formRef.value;
            if (form) {
              const errorMap: any = {};
              for (const iterator of error.errors) {
                errorMap[iterator.field] = {
                  status: "error",
                  message: iterator.message,
                };
              }
              form.setFields(errorMap);
            }
          }
          // others
          else {
            Modal.error({
              title: t("modal-title-default"),
              content: String(error),
              okText: t("modal-text-ok"),
            });
          }
        } finally {
          state.disabled = false;
        }
      }
    : undefined;

  const state = shallowReactive({
    ref: formRef,
    model: data,
    disabled: false,
    onSubmitSuccess,
  });

  return state;
}
