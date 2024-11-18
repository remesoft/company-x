import {
  Clock01Icon,
  EyeIcon,
  FavouriteIcon,
  InformationCircleIcon,
  Share02Icon,
  Share04Icon,
  ShoppingBasket03Icon,
  StarIcon,
  StarsIcon,
} from "hugeicons-react";
import React from "react";
import serviceImage from "../assets/service/service-01.jpg";
import FAQs from "../components/FAQs";
import avatar from "../assets/images/avatar.jpg";
import PricingTab from "../components/ui/PriceTab";

export default function ServiceDetails() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-8">
      <section>
        <h1 className="py-2 text-2xl font-semibold">
          I will do figma website design, figma landing page
        </h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <StarIcon size={18} fill="#FFC402" color="#FFC402" />
              4.1 &#40;2 Review&#41;
            </span>
            <span className="flex items-center gap-2">
              <ShoppingBasket03Icon size={18} />
              10 Sold
            </span>
            <span className="flex items-center gap-2">
              <EyeIcon size={18} />
              1400 Views
            </span>
            <span className="flex items-center gap-2">
              <Clock01Icon size={18} className="text-[##FFC402]" />
              July 2, 2024
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button>
              <FavouriteIcon />
            </button>
            <button>
              <Share04Icon />
            </button>
          </div>
        </div>
      </section>
      <section className="mt-6 flex gap-4">
        <div className="w-2/3">
          {/* image area start  */}
          <div>
            <img src={serviceImage} alt="service image" />
            <div className="mt-4 flex gap-2">
              <img
                src={serviceImage}
                alt="service image"
                className="h-20 rounded-md"
              />
              <img
                src={serviceImage}
                alt="service image"
                className="h-20 rounded-md"
              />
              <img
                src={serviceImage}
                alt="service image"
                className="h-20 rounded-md"
              />
              <img
                src={serviceImage}
                alt="service image"
                className="h-20 rounded-md"
              />
            </div>
          </div>

          {/* description area start  */}
          <div className="border-b py-6">
            <h3 className="text-2xl font-bold">Descriptions</h3>
            <p className="mt-2">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit.Neque porro quisquam est, qui
              dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
              sed quia non numquam eius modi tempora incidunt ut labore et
              dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur?
            </p>
          </div>

          {/* packages area start  */}
          <div class="py-6">
            <h3 className="text-2xl font-bold">Packages</h3>
            <div class="mt-4 overflow-x-auto">
              <table class="w-full table-auto border-collapse border border-gray-200 text-left">
                <thead>
                  <tr>
                    <th class="border border-gray-200 p-4 font-normal">
                      Packages
                    </th>
                    <th class="border border-gray-200 p-4 text-center">
                      <div class="font-semibold">Basic</div>
                      <div class="text-xl font-bold">$99</div>
                      <button class="mt-2 w-full rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                        Select
                      </button>
                    </th>
                    <th class="border border-gray-200 p-4 text-center">
                      <div class="font-semibold">Standard</div>
                      <div class="text-xl font-bold">$249</div>
                      <button class="mt-2 w-full rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                        Select
                      </button>
                    </th>
                    <th class="border border-gray-200 p-4 text-center">
                      <div class="font-semibold">Premium</div>
                      <div class="text-xl font-bold">$559</div>
                      <button class="mt-2 w-full rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                        Select
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-gray-100">
                    <td class="border border-gray-200 p-4">Delivery Time</td>
                    <td class="border border-gray-200 p-4 text-center">
                      3 day
                    </td>
                    <td class="border border-gray-200 p-4 text-center">
                      6 day
                    </td>
                    <td class="border border-gray-200 p-4 text-center">
                      10 day
                    </td>
                  </tr>
                  <tr>
                    <td class="border border-gray-200 p-4">
                      Number of Revisions
                    </td>
                    <td class="border border-gray-200 p-4 text-center">
                      unlimited
                    </td>
                    <td class="border border-gray-200 p-4 text-center">
                      unlimited
                    </td>
                    <td class="border border-gray-200 p-4 text-center">
                      unlimited
                    </td>
                  </tr>
                  <tr class="bg-gray-100">
                    <td class="border border-gray-200 p-4">
                      Responsive Design
                    </td>
                    <td class="border border-gray-200 p-4 text-center">
                      <span class="text-green-600">✔</span>
                    </td>
                    <td class="border border-gray-200 p-4 text-center">
                      <span class="text-green-600">✔</span>
                    </td>
                    <td class="border border-gray-200 p-4 text-center">
                      <span class="text-green-600">✔</span>
                    </td>
                  </tr>
                  <tr>
                    <td class="border border-gray-200 p-4">Source File</td>
                    <td class="border border-gray-200 p-4 text-center">
                      <span class="text-green-600">✔</span>
                    </td>
                    <td class="border border-gray-200 p-4 text-center">
                      <span class="text-green-600">✔</span>
                    </td>
                    <td class="border border-gray-200 p-4 text-center">
                      <span class="text-green-600">✔</span>
                    </td>
                  </tr>
                  <tr class="bg-gray-100">
                    <td class="border border-gray-200 p-4">Prototype</td>
                    <td class="border border-gray-200 p-4 text-center">–</td>
                    <td class="border border-gray-200 p-4 text-center">
                      <span class="text-green-600">✔</span>
                    </td>
                    <td class="border border-gray-200 p-4 text-center">
                      <span class="text-green-600">✔</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="mt-4 text-sm">
              You can add services add-ons on the next page.
            </p>
          </div>

          {/* faqs area start */}
          <FAQs />

          {/* ratting area start  */}
          <div className="">
            <h3 className="mb-2 text-2xl font-bold">Reviews</h3>
            {/* Overall Rating */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center gap-2 rounded-md bg-blue-100 px-4 py-2">
                <span className="text-2xl font-semibold text-blue-600">
                  4.3
                </span>
                <StarIcon size={20} fill="#2563eb" className="text-blue-600" />
              </div>
              <p className="text-sm text-gray-600">Base on 1 reviews</p>
            </div>

            {/* Ratings Breakdown */}
            <div className="mt-4 grid grid-cols-2 gap-6">
              <div>
                <div className="mb-2 flex items-center justify-between text-gray-600">
                  <span>Salary &amp; Benefits</span>
                  <InformationCircleIcon size={15} />
                </div>
                <div className="relative">
                  <div className="h-1 rounded-full bg-gray-200">
                    <div className="h-1 w-full rounded-full bg-blue-600" />
                  </div>
                  <span className="absolute right-0 top-3 text-xs text-gray-600">
                    5.00
                  </span>
                </div>
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between text-gray-600">
                  <span>Salary &amp; Benefits</span>
                  <InformationCircleIcon size={15} />
                </div>
                <div className="relative">
                  <div className="h-1 rounded-full bg-gray-200">
                    <div className="h-1 w-full rounded-full bg-blue-600" />
                  </div>
                  <span className="absolute right-0 top-3 text-xs text-gray-600">
                    5.00
                  </span>
                </div>
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between text-gray-600">
                  <span>Salary &amp; Benefits</span>
                  <InformationCircleIcon size={15} />
                </div>
                <div className="relative">
                  <div className="h-1 rounded-full bg-gray-200">
                    <div className="h-1 w-full rounded-full bg-blue-600" />
                  </div>
                  <span className="absolute right-0 top-3 text-xs text-gray-600">
                    5.00
                  </span>
                </div>
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between text-gray-600">
                  <span>Salary &amp; Benefits</span>
                  <InformationCircleIcon size={15} />
                </div>
                <div className="relative">
                  <div className="h-1 rounded-full bg-gray-200">
                    <div className="h-1 w-full rounded-full bg-blue-600" />
                  </div>
                  <span className="absolute right-0 top-3 text-xs text-gray-600">
                    5.00
                  </span>
                </div>
              </div>
            </div>
            {/* Individual Review */}
            <div className="mt-6 rounded-md bg-white p-4 shadow-sm">
              <div className="flex items-center space-x-4">
                <img
                  src={avatar}
                  alt="User"
                  className="h-10 w-10 rounded-full"
                />
                <div>
                  <p className="text-sm font-semibold">Kevin Kay</p>
                  <p className="text-xs text-gray-400">1 month ago</p>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                I bought it 3 times and very happy about it!
              </p>
              <div className="mt-2 flex">
                {/* Stars */}
                <div className="flex space-x-1 text-yellow-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.25l3.142 6.368 7.042 1.022-5.09 4.962 1.202 7.014L12 18.664l-6.296 3.307 1.202-7.014-5.09-4.962 7.042-1.022L12 2.25z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.25l3.142 6.368 7.042 1.022-5.09 4.962 1.202 7.014L12 18.664l-6.296 3.307 1.202-7.014-5.09-4.962 7.042-1.022L12 2.25z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.25l3.142 6.368 7.042 1.022-5.09 4.962 1.202 7.014L12 18.664l-6.296 3.307 1.202-7.014-5.09-4.962 7.042-1.022L12 2.25z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.25l3.142 6.368 7.042 1.022-5.09 4.962 1.202 7.014L12 18.664l-6.296 3.307 1.202-7.014-5.09-4.962 7.042-1.022L12 2.25z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.25l3.142 6.368 7.042 1.022-5.09 4.962 1.202 7.014L12 18.664l-6.296 3.307 1.202-7.014-5.09-4.962 7.042-1.022L12 2.25z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <PricingTab />
        </div>
      </section>
    </div>
  );
}
