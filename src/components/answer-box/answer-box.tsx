import { component$ } from "@builder.io/qwik"

interface AnswerBoxProps {
    answer?: string;
    votes?: number;
}
export const AnswerBox = component$((props: AnswerBoxProps) => {
    const {answer, votes} = props;
    return (
        <div class="flex bg-white shadow rounded p-4 w-64 h-20 mb-4">
            <div class="w-5/6 text-xl flex items-center font-medium">{answer ?? ''}</div>
            <div class="text-xl flex items-center">{votes ?? ''}</div>
        </div>
    )
});