/* eslint-disable react/prop-types */
import { Link as Anchor } from "react-router-dom";

export default function Display({ options }) {
  return (
    <div className="flex ms-5 absolute top-[70px] left-[70px] gap-2 flex-col bg-tertiary p-2 rounded-xl">
      {options.map((each) =>
        each.to
          ? each.show &&
            (each.to === "/signin" ? (
              <Anchor
                key={each.to}
                to={each.to}
                className="h-[50px] text-[20px] text-white px-2 bg-primary hover:bg-secondary rounded-xl w-[100px] flex justify-center items-center mx-1"
              >
                {each.title}
              </Anchor>
            ) : (
              <Anchor
                key={each.to}
                to={each.to}
                className="h-[50px] text-[20px] px-2 bg-white hover:bg-hover rounded-xl w-[100px] flex justify-center items-center mx-1"
              >
                {each.title}
              </Anchor>
            ))
          : each.show && (
              <span
                key={each.title}
                onClick={each.onClick}
                style={{ backgroundColor: { hover: each.hover } }}
                className="h-[50px] text-[20px] px-2 bg-primary hover:bg-secondary text-white rounded-xl w-[100px] flex justify-center items-center mx-1 cursor-pointer"
              >
                {each.title}
              </span>
            )
      )}
    </div>
  );
}
