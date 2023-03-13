import React, { useState } from "react";
import "../../styles/faq.css";
import faqData from "../../data/faqData";

const FaqList = () => {
  return (
    <>
      {faqData.map((item) => {
        return <FaqItem item={item} key={item.id} />;
      })}
    </>
  );
};

const FaqItem = ({ item }) => {
  const { questionsItem, responseItem } = item;
  const [questToggle, setQuestToggle] = useState(true);

  return (
    <>
      <article
        className={questToggle ? "faqItems" : "faqItems active"}
        onClick={() => setQuestToggle(!questToggle)}
      >
        <div className={questToggle ? "questions" : "questions active"}>
          <h2> {questionsItem} </h2>
          <button>
            {questToggle ? (
              <i class="bx bx-chevron-down"></i>
            ) : (
              <i class="bx bx-chevron-up"></i>
            )}
          </button>
        </div>
        <div className={questToggle ? "response  " : "response actived"}>
          <p> {responseItem} </p>
        </div>
      </article>
    </>
  );
};

export default FaqList;
