import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import styles from "@/styles/Home.module.css";
import { Card, Col, Container, Row } from "react-bootstrap";

function TechSlider() {
  const items = [
    {
      title: "Node.js",
      desc: "High-performance server-side applications, real-time systems, and scalable APIs. Node.js powers modern startups and enterprise backends with JavaScript everywhere.",
      tags: ["Express", "NestJS", "Real-time", "REST/GraphQL", "Microservices"],
    },
    {
      title: "Shopify",
      desc: "Custom Shopify themes, app development, and store optimization. Build powerful e-commerce experiences with headless commerce and Liquid templating.",
      tags: [
        "Liquid",
        "Shopify Plus",
        "Headless",
        "Custom Apps",
        "Storefront API",
      ],
    },
    {
      title: "WordPress",
      desc: "Custom themes, plugin development, and enterprise WordPress solutions. WooCommerce setups, headless WordPress with REST API, and high-traffic sites.",
      tags: [
        "WooCommerce",
        "Custom Themes",
        "Plugins",
        "Headless",
        "Gutenberg",
      ],
    },
    {
      title: "Laravel",
      desc: "Build robust web applications, RESTful APIs, and custom backend systems. Laravel's elegant syntax powers e-commerce platforms, SaaS products, and enterprise apps.",
      tags: ["PHP", "REST APIs", "E-commerce", "SaaS", "Admin Panels"],
    },
    {
      title: "Python",
      desc: "From Django and Flask backends to ML pipelines and automation scripts. Python powers analytics dashboards, AI-driven platforms, and scalable web services.",
      tags: ["Django", "Flask", "AI/ML", "Automation", "Data Science"],
    },
    {
      title: "ASP.NET",
      desc: "Enterprise-grade applications with Microsoft's robust framework. Perfect for large-scale systems, secure APIs, and cloud-native solutions on Azure.",
      tags: ["C#", "Azure", "Enterprise", "Microservices", "APIs"],
    },
  ];

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col>
              <div className="d-flex gap-2 justify-content-end mb-3">
                <button className={`${styles.prev} prevArrow`}>
                  <FaChevronLeft />
                </button>
                <button className={`${styles.next} nextArrow`}>
                  <FaChevronRight />
                </button>
              </div>
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView={3}
                slidesPerGroup={1}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                loop={true}
                navigation={{
                  prevEl: ".prevArrow",
                  nextEl: ".nextArrow",
                }}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1200: { slidesPerView: 3 },
                }}
                style={{ alignItems: "stretch" }}
              >
                {items.map((item, i) => (
                  <SwiperSlide
                    key={i}
                    style={{ height: "auto", display: "flex" }}
                  >
                    <Card
                      className={`${styles.technologyCard} h-100 d-flex flex-column`}
                    >
                      <h3>{item.title}</h3>

                      <p className="flex-grow-1">{item.desc}</p>

                      <div className={styles.technologyTags}>
                        {item.tags.map((tag, t) => (
                          <span key={t}>{tag}</span>
                        ))}
                      </div>
                    </Card>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default TechSlider;
