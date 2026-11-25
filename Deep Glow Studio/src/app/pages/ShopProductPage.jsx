import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SeoHead } from "../components/SeoHead";
import { AnimatedHeading } from "../components/AnimatedHeading";

const INTERNAL_PRODUCTS = {
  clovix: {
    name: "Clovix",
    logo: "/brand/clovix.svg",
    description:
      "Our in-house desktop app for editing video without the busywork. We use it on every project; it is not for sale.",
  },
  "clovix-monitor": {
    name: "Clovix Monitor",
    logo: "/brand/clovix-monitor.svg",
    description:
      "The office dashboard that shows where every Lumas video is, step by step. Built for our team; it is not for sale.",
  },
};

export function ShopProductPage({ productKey }) {
  const product = INTERNAL_PRODUCTS[productKey] || INTERNAL_PRODUCTS.clovix;

  return (
    <>
      <SeoHead title={product.name} description={product.description} />

      <section className="pt-36 pb-28 px-4 sm:px-6 min-h-[75vh] flex items-center">
        <div className="mx-auto max-w-2xl text-center space-y-7">
          <div className="glass-card inline-flex p-5 rounded-3xl mx-auto">
            <img src={product.logo} alt={`${product.name} logo`} className="h-16 w-auto" />
          </div>

          <div className="font-display text-xs uppercase tracking-[0.16em] text-brand-cyan">
            {product.name}
          </div>

          <AnimatedHeading
            as="h1"
            text="This is / not for sale."
            className="text-4xl sm:text-6xl"
          />

          <p className="body-text text-base sm:text-lg max-w-xl mx-auto">{product.description}</p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
            <Link to="/" className="btn-glass">
              <ArrowLeft className="w-4 h-4" />
              <span>Back home</span>
            </Link>
            <Link to="/contact" className="btn-primary">
              <span className="btn-dot" />
              <span>Work with us</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
