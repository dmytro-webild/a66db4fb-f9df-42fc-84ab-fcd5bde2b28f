"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroBillboardRotatedCarousel from "@/components/sections/hero/HeroBillboardRotatedCarousel";
import ProductCardThree from "@/components/sections/product/ProductCardThree";
import InlineImageSplitTextAbout from "@/components/sections/about/InlineImageSplitTextAbout";
import FeatureCardTwentyOne from "@/components/sections/feature/FeatureCardTwentyOne";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import TestimonialCardThirteen from "@/components/sections/testimonial/TestimonialCardThirteen";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import { Heart, Mail, Shield, Sparkles, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="directional-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="mediumLarge"
      sizing="largeSmallSizeMediumTitles"
      background="blurBottom"
      cardStyle="solid"
      primaryButtonStyle="flat"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="StyleCraft"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Collections", id: "products" },
            { name: "About", id: "about" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Shop Now",            href: "#products"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardRotatedCarousel
          title="Elevate Your Style"
          description="Discover our curated collection of premium clothing crafted for the modern individual. Each piece represents quality, elegance, and timeless design."
          tag="New Collection"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          buttons={[
            { text: "Shop Collection", href: "#products" },
            { text: "View Lookbook", href: "#about" }
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "radial-gradient" }}
          carouselItems={[
            {
              id: "carousel-1",              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-wearing-minimalist-shirt_23-2149317769.jpg",              imageAlt: "Premium fashion collection showcase"
            },
            {
              id: "carousel-2",              imageSrc: "http://img.b2bpic.net/free-photo/still-life-spring-wardrobe-switch_23-2150478999.jpg",              imageAlt: "Stylish clothing lineup display"
            },
            {
              id: "carousel-3",              imageSrc: "http://img.b2bpic.net/free-psd/horizontal-banner-template-social-media-fashion-influencer_23-2148954736.jpg",              imageAlt: "Designer apparel presentation"
            },
            {
              id: "carousel-4",              imageSrc: "http://img.b2bpic.net/free-photo/view-woman-wearing-stylish-fedora-hat_23-2150711573.jpg",              imageAlt: "Fashion collection beauty shot"
            },
            {
              id: "carousel-5",              imageSrc: "http://img.b2bpic.net/free-photo/leaning-wall-by-hand-young-beautiful-girl-warm-clothes-have-walk-city-her-weekends-time_146671-16826.jpg",              imageAlt: "Elegant fashion brand showcase"
            },
            {
              id: "carousel-6",              imageSrc: "http://img.b2bpic.net/free-photo/young-business-owner-preparing-her-store_23-2149300872.jpg",              imageAlt: "Contemporary clothing aesthetic"
            }
          ]}
          autoPlay={true}
          autoPlayInterval={5000}
          ariaLabel="Hero section with rotating fashion collection"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardThree
          title="Featured Collections"
          description="Handpicked essentials and limited editions that define modern fashion. Browse our latest arrivals and bestselling pieces."
          tag="Curated Selection"
          tagIcon={Star}
          tagAnimation="opacity"
          buttons={[
            { text: "View All Products", href: "#" }
          ]}
          buttonAnimation="slide-up"
          gridVariant="bento-grid"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          products={[
            {
              id: "product-casual-tee",              name: "Premium Essentials Tee",              price: "$45",              imageSrc: "http://img.b2bpic.net/free-photo/still-life-say-no-fast-fashion_23-2149669571.jpg",              imageAlt: "Casual fashion t-shirt"
            },
            {
              id: "product-classic-denim",              name: "Classic Fit Denim",              price: "$89",              imageSrc: "http://img.b2bpic.net/free-photo/fashion-girl-walking-sspring-park_1157-21315.jpg",              imageAlt: "Premium denim jeans"
            },
            {
              id: "product-elegant-dress",              name: "Elegant Evening Dress",              price: "$129",              imageSrc: "http://img.b2bpic.net/free-photo/abstract-store-with-futuristic-concept-architecture_23-2150861874.jpg",              imageAlt: "Luxury fashion dress"
            },
            {
              id: "product-bomber-jacket",              name: "Modern Bomber Jacket",              price: "$119",              imageSrc: "http://img.b2bpic.net/free-photo/light-brown-beige-pants-hanger_52683-135673.jpg",              imageAlt: "Premium fashion jacket"
            },
            {
              id: "product-silk-scarf",              name: "Silk Statement Scarf",              price: "$65",              imageSrc: "http://img.b2bpic.net/free-photo/lifestyle-fashion-portrait-pretty-elegant-woman-wearing-trendy-stylish-outfit-violet-long-scarf-cashmere-luxury-coat-midi-dress-smiling-end-enjoying-stay-front-modern-business-center_291049-642.jpg",              imageAlt: "Luxury fashion accessory"
            },
            {
              id: "product-wool-sweater",              name: "Fine Wool Sweater",              price: "$99",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-young-adult-enjoying-home-comfort_23-2149134358.jpg",              imageAlt: "Premium casual sweater"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <InlineImageSplitTextAbout
          heading={[
            { type: "text", content: "About StyleCraft" },
            {
              type: "image",              src: "http://img.b2bpic.net/free-photo/luxury-design-modern-wooden-table-decor-generated-by-ai_188544-27803.jpg",              alt: "Fashion brand studio"
            }
          ]}
          buttons={[
            { text: "Learn Our Story", href: "#" }
          ]}
          buttonAnimation="slide-up"
          useInvertedBackground={true}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwentyOne
          title="Why Choose Our Brand"
          description="We combine timeless design with modern sustainability practices. Every collection reflects our commitment to quality and ethical fashion."
          tag="Quality Commitment"
          tagIcon={Shield}
          tagAnimation="opacity"
          buttons={[
            { text: "Discover Our Values", href: "#" }
          ]}
          buttonAnimation="blur-reveal"
          imageSrc="http://img.b2bpic.net/free-photo/blue-silk-sleeve-close-up_23-2148237591.jpg"
          imageAlt="Premium fabric quality showcase"
          mediaAnimation="opacity"
          useInvertedBackground={false}
          mediaPosition="right"
          accordionItems={[
            {
              id: "feature-1",              title: "Premium Quality Materials",              content: "We source only the finest fabrics from certified suppliers, ensuring durability, comfort, and a luxurious feel with every piece."
            },
            {
              id: "feature-2",              title: "Sustainable Production",              content: "Our manufacturing processes prioritize environmental responsibility, reducing waste and supporting fair labor practices globally."
            },
            {
              id: "feature-3",              title: "Timeless Design",              content: "Each collection is carefully designed to transcend seasonal trends, creating wardrobe staples that remain stylish for years."
            },
            {
              id: "feature-4",              title: "Expert Craftsmanship",              content: "Our team of skilled artisans brings decades of fashion expertise to every detail, from cutting to finishing touches."
            }
          ]}
        />
      </div>

      <div id="socialproof" data-section="socialproof">
        <SocialProofOne
          title="Featured In"
          description="Recognized by leading fashion publications and industry partners worldwide."
          names={[
            "Fashion Weekly",            "Style Magazine",            "Vogue",            "Designer Collective",            "Boutique Network",            "Style Awards",            "Trend Hub",            "Sustainable Fashion"
          ]}
          logos={[
            "http://img.b2bpic.net/free-vector/interior-design-logo-template_742173-3120.jpg",            "http://img.b2bpic.net/free-photo/black-lives-matter-message-with-yellow-background_23-2148913888.jpg",            "http://img.b2bpic.net/free-psd/youtube-cover-template-minimalistic-online-fashion-store_23-2149047909.jpg",            "http://img.b2bpic.net/free-vector/flat-design-geometric-business-card_23-2149292240.jpg",            "http://img.b2bpic.net/free-vector/hand-drawn-gold-crown-logo-template_23-2150947497.jpg",            "http://img.b2bpic.net/free-vector/golden-elegant-wedding-landing-page-template_23-2148221018.jpg",            "http://img.b2bpic.net/free-vector/minimalist-wedding-monograms-pastel-colors-pack_23-2148390554.jpg",            "http://img.b2bpic.net/free-vector/flat-geometric-horizontal-business-card-template_23-2149276672.jpg"
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
          showCard={true}
          speed={40}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThirteen
          title="Customer Stories"
          description="See what our customers say about StyleCraft and the difference quality makes in their everyday style."
          tag="Trusted By Thousands"
          tagIcon={Heart}
          tagAnimation="opacity"
          buttons={[
            { text: "Read More Reviews", href: "#" }
          ]}
          buttonAnimation="slide-up"
          showRating={true}
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={true}
          testimonials={[
            {
              id: "testimonial-1",              name: "Sarah Mitchell",              handle: "@sarahmwears",              testimonial: "StyleCraft has completely transformed my wardrobe. The quality is exceptional, and I love knowing the pieces are ethically made. A true investment in fashion.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/suitmaker-tailor-cutting-fabric_482257-78193.jpg",              imageAlt: "Sarah Mitchell"
            },
            {
              id: "testimonial-2",              name: "James Chen",              handle: "@jameschen_style",              testimonial: "Finally found a brand that combines style with sustainability. Every piece from StyleCraft feels premium and lasts through countless seasons.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/handsome-young-business-man-suit-grey-background_613910-15440.jpg",              imageAlt: "James Chen"
            },
            {
              id: "testimonial-3",              name: "Emma Rodriguez",              handle: "@emmarod_fashion",              testimonial: "The attention to detail is incredible. From fabric quality to finishing, it's clear StyleCraft cares about their craft. My go-to brand now.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-professional-businesswoman-indoors_23-2148824826.jpg",              imageAlt: "Emma Rodriguez"
            },
            {
              id: "testimonial-4",              name: "Michael Park",              handle: "@michaelpark_co",              testimonial: "Worth every penny. StyleCraft pieces are versatile, timeless, and the fit is perfect. Customer service is outstanding too.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/serious-successful-young-businessman-standing-office-looking-camera_1163-4223.jpg",              imageAlt: "Michael Park"
            },
            {
              id: "testimonial-5",              name: "Jessica Williams",              handle: "@jessicaw_style",              testimonial: "I'm obsessed with this brand. The designs are elegant yet wearable for everyday. StyleCraft is my favorite discovery this year.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/elderly-business-woman-office-isolated_1303-21365.jpg",              imageAlt: "Jessica Williams"
            },
            {
              id: "testimonial-6",              name: "David Thompson",              handle: "@davidthompson_co",              testimonial: "As someone who values quality over quantity, StyleCraft is perfect. Their pieces are investment-worthy and never go out of style.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/happy-successful-businessman-posing-outside_74855-2003.jpg",              imageAlt: "David Thompson"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Get In Touch"
          tagIcon={Mail}
          tagAnimation="slide-up"
          title="Ready to Elevate Your Wardrobe?"
          description="Join our community and receive exclusive access to new collections, style tips, and special offers."
          buttons={[
            { text: "Subscribe To Newsletter", href: "mailto:subscribe@stylecraft.com" },
            { text: "Contact Us", href: "#" }
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="http://img.b2bpic.net/free-photo/beautiful-woman-wearing-minimalist-shirt_23-2149317769.jpg"
          imageAlt="StyleCraft fashion collection"
          logoText="StyleCraft"
          copyrightText="© 2025 StyleCraft. All rights reserved."
          columns={[
            {
              title: "Shop",              items: [
                { label: "New Arrivals", href: "#products" },
                { label: "Best Sellers", href: "#" },
                { label: "Collections", href: "#" },
                { label: "Sale", href: "#" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "#about" },
                { label: "Our Story", href: "#" },
                { label: "Sustainability", href: "#" },
                { label: "Careers", href: "#" }
              ]
            },
            {
              title: "Support",              items: [
                { label: "Contact Us", href: "#contact" },
                { label: "FAQ", href: "#" },
                { label: "Shipping Info", href: "#" },
                { label: "Returns", href: "#" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" },
                { label: "Accessibility", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}