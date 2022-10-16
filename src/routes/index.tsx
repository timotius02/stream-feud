import { component$, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { AnswersBoard } from "~/components/answer-board/answer-board";
import { Modal, ModalStore } from "~/components/modal/modal";

export default component$(() => {
  const store = useStore<ModalStore>({
    isOpen: false,
  });

  const answers = {
    eighty: 80,
    seventy: 70,
    sixty: 60,
    fifty: 50,
    forty: 40,
    thirty: 30,
    twenty: 20,
  };
  return (
    <div class="container mx-auto flex flex-col items-center">
      <h1 class="text-2xl font-bold mb-4">Streamer Feud</h1>
      <button onClick$={() => (store.isOpen = true)}>open modal</button>
      <AnswersBoard answers={answers} />
      <Modal title="test-modal" store={store}>
        <div>Modal content</div>
      </Modal>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Stream Feud",
};
