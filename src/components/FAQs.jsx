import React from "react";
import CollapsibleMenu from "./ui/CollapsibleMenu";
const FAQs = () => {
  return (
    <>
      <section className="py-12">
        <div className="mx-2 max-w-[1150px] lg:mx-auto">
          <h3 className="mb-4 text-2xl font-semibold">FAQs</h3>
          <div className="">
            <ul>
              <li className="mb-4">
                <CollapsibleMenu
                  title="Questions 1"
                  menuItems={[
                    "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
                  ]}
                  textColor="text-black"
                  border="border-b border-gray-200"
                  mode="collapsible-only"
                />
                <CollapsibleMenu
                  title="Questions 1"
                  menuItems={[
                    "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
                  ]}
                  textColor="text-black"
                  border="border-b border-gray-200"
                  mode="collapsible-only"
                />
                <CollapsibleMenu
                  title="Questions 1"
                  menuItems={[
                    "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
                  ]}
                  textColor="text-black"
                  border="border-b border-gray-200"
                  mode="collapsible-only"
                />
                <CollapsibleMenu
                  title="Questions 1"
                  menuItems={[
                    "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
                  ]}
                  textColor="text-black"
                  border="border-b border-gray-200"
                  mode="collapsible-only"
                />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQs;
