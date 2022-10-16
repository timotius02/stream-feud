import { component$, Slot } from '@builder.io/qwik';

export interface ModalStore {
  isOpen: boolean;
}

export interface ModalProps {
  title: string;
  store: ModalStore;
}

export const Modal = component$(({ title, store }: ModalProps) => {
  if (store.isOpen)
    return (
      <div
        className="relative z-overlay"
        aria-labelledby={title}
        role="dialog"
        aria-modal="true"
      >
        <Overlay />

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
            <Panel>
              <button onClick$={() => (store.isOpen = false)}>
                close modal
              </button>
              <Slot />
            </Panel>
          </div>
        </div>
      </div>
    );

  return null;
});

export const Overlay = component$(() => {
  return (
    <div className="fixed inset-0 transition-opacity bg-black bg-opacity-40 backdrop-blur-sm" />
  );
});

export const Panel = component$(() => {
  return (
    <div className="relative p-8 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-lg">
      <Slot />
    </div>
  );
});