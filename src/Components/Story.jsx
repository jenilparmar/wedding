import React from "react";
import SubStory from "./SubStory";
export default function Story({ activePage, actvieFunction }) {
  return (
    <>
      <div className="w-screen h-fit flex gap-0 flex-col">
        <SubStory
          cartoonNumber={1}
          title={"How We Met!!"}
          story={
            "Aarav and Aanya met on a beautiful spring afternoon at a mutual friend's engagement party in Bangalore. Aarav was initially reluctant to attend, but everything changed when he heard Aanya's laughter. Drawn to her radiant smile, he introduced himself, and they quickly discovered a shared passion for travel and food. They spent the evening in deep conversation, lost in their own world amid the bustling party. By the end of the night, they exchanged numbers, and their first coffee date soon followed. From that moment on, Aarav and Aanya were inseparable, their bond growing stronger with each passing day."
          }
        />

        <SubStory cartoonNumber={2} />

        <SubStory cartoonNumber={3} />

        <SubStory cartoonNumber={4} />

        <SubStory cartoonNumber={5} />

        <SubStory cartoonNumber={6} />

        <SubStory cartoonNumber={7} />
      </div>
    </>
  );
}
