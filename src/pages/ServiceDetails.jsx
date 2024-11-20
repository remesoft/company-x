import {
  Clock01Icon,
  EyeIcon,
  FavouriteIcon,
  InformationCircleIcon,
  Share04Icon,
  ShoppingBasket03Icon,
  StarIcon,
} from "hugeicons-react";
import React from "react";
import FAQs from "../components/FAQs";
import avatar from "../assets/images/avatar.jpg";
import PricingTab from "../components/ui/PriceTab";
import Gallery from "../components/ui/Gallery";
import data from "../data/service";
import PackageTable from "../components/ui/PackageTable";
import Review from "../components/Review";

export default function ServiceDetails() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-8">
      {/* title and others information  */}
      <section>
        <h1 className="py-2 text-2xl font-semibold">{data.title}</h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <StarIcon size={18} fill="#FFC402" color="#FFC402" />
              {data.reviews.ratings} &#40; {data.reviews.total_reviews}&nbsp;
              Review &#41;
            </span>
            <span className="flex items-center gap-2">
              <ShoppingBasket03Icon size={18} />
              {data.sold} Sold
            </span>
            <span className="flex items-center gap-2">
              <EyeIcon size={18} />
              {data.views} Views
            </span>
            <span className="flex items-center gap-2">
              <Clock01Icon size={18} className="text-[##FFC402]" />
              {data.createdAt}
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

      {/* images and other information  */}
      <section className="mt-6 flex flex-col gap-4 lg:flex-row">
        <div className="lg:w-2/3">
          <Gallery images={data.images} />
          <div className="border-b py-6">
            <h3 className="text-2xl font-bold">Descriptions</h3>
            <p className="mt-2">{data.description}</p>
          </div>
          <PackageTable data={data.packages} />
          <FAQs />
          <Review />
        </div>
        <div className="lg:w-1/3">
          <PricingTab />
        </div>
      </section>
    </div>
  );
}
