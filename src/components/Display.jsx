/* eslint-disable react/prop-types */
import { Link as Anchor } from "react-router-dom";

export default function Display({ options }) {
  return (
    <div className="flex ms-5 absolute top-[70px] left-[70px] gap-2 flex-col bg-pink-400 p-2 rounded-xl">
      {options.map((each) =>
        each.to
          ? each.show && (
              <Anchor
                key={each.to}
                to={each.to}
                className="h-[50px] text-[20px] px-2 bg-white rounded-xl w-[100px] flex justify-center items-center mx-1"
              >
                {each.title}
              </Anchor>
            )
          : each.show && (
              <span
                key={each.title}
                onClick={each.onClick}
                className="h-[50px] text-[20px] px-2 bg-white rounded-xl w-[100px] flex justify-center items-center mx-1"
              >
                {each.title}
              </span>
            )
      )}
    </div>
  );
}
