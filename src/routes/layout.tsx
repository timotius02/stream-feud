import { component$, Slot } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
    <div class="text-3xl font-bold underline">Header</div>
      <main>
        <section>
          <Slot />
        </section>
      </main>
      <footer>
      Footer
      </footer>
    </>
  );
});
