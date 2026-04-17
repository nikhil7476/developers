import React from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import styles from "@/styles/Home.module.css";
import { Accordion, Card, Col, Container, Row } from "react-bootstrap";
import { CiMobile2, CiCloud } from "react-icons/ci";
import {
  FaRegClock,
  FaGlobe,
  FaShieldAlt,
  FaCode,
  FaDollarSign,
  FaLandmark,
  FaStar,
  FaSquare,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { FiUsers, FiRefreshCw } from "react-icons/fi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { LuBrain, LuServer, LuBuilding2 } from "react-icons/lu";
import { MdOutlineArrowOutward } from "react-icons/md";
import { RxLightningBolt } from "react-icons/rx";
import { GoGear, GoRocket } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const techs = [
  "Laravel",
  "Python",
  "ASP.NET",
  "React",
  "Vue.js",
  "Node.js",
  "AWS",
  "Docker",
  "Kubernetes",
  "PostgreSQL",
  "MongoDB",
  "TensorFlow",
];

const faqs = [
  {
    q: "How quickly can we hire a dedicated developer?",
    a: "We can match you with pre-vetted developers within 48 hours. Full onboarding and team integration typically happens in under one week, so you can start your project with minimal delay.",
  },
  {
    q: "What technologies do your developers work with?",
    a: "Our developers specialize in Laravel, Python (Django, Flask), ASP.NET, React, Vue.js, React Native, Flutter, AWS, Docker, Kubernetes, TensorFlow, and more. We cover web, mobile, AI/ML, and DevOps.",
  },
  {
    q: "Do you offer part-time and full-time hiring models?",
    a: "Yes. We offer flexible engagement models including part-time (20 hrs/week), full-time (40 hrs/week), project-based, and dedicated team arrangements. You choose what works best for your project.",
  },
  {
    q: "Can I hire a developer for a short-term project?",
    a: "Absolutely. We support short-term engagements from as little as one month. Whether it's a sprint, proof of concept, or a specific module, we can provide the right talent for the duration you need.",
  },
  {
    q: "How do you ensure communication and project alignment?",
    a: "Our developers work in your time zone and integrate directly into your existing tools (Slack, Jira, GitHub, etc.). You get daily standups, sprint reviews, and direct access to your developer.",
  },
  {
    q: "Do you support startups and enterprise projects?",
    a: "Yes, we work with everyone from early-stage startups building their first MVP to Fortune 500 enterprises scaling their engineering capacity. Our engagement models flex to fit your stage and budget.",
  },
];

export default function Home() {
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
      <Head>
        <title>Hire Dedicated Developers</title>
        <meta
          name="description"
          content="Hire Dedicated Developers At NextUpgrad USA"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.hire}>
        {/* Banner Section */}
        <section className={`${styles.banner} align-content-center`}>
          <Container>
            <Row>
              <Col>
                <span className={styles.subHeading}>
                  Feel The Magic Of Technology
                </span>
                <h1>
                  Hire Dedicated Developers.
                  <br />
                  <span>Ship Faster.</span>
                </h1>
                <p>
                  Scale your tech team with pre-vetted Website, Mobile, AI/ML,
                  and
                  <br />
                  DevOps developers. Onboard in under a week. No long-term
                  contracts.
                </p>
                <div className={styles.ctaGroup}>
                  <a href="#contact" className={styles.ctaPrimary}>
                    Hire Dedicated Developers <MdOutlineArrowOutward />
                  </a>
                  <a href="#contact" className={styles.ctaSecondary}>
                    Book Free Consultation
                  </a>
                </div>
                <ul className="list-unstyled d-flex gap-5 m-0 p-0">
                  <li>
                    <FaRegClock /> {"Onboard in < 1 week"}
                  </li>
                  <li>
                    <FaGlobe /> Same time zone collaboration
                  </li>
                  <li>
                    <FaShieldAlt /> Pre-vetted expert talent
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Tech Marquee Section*/}
        <section className={styles.techMarquee} data-testid="tech-marquee">
          <Container fluid>
            <Marquee speed={40} gradient={false} pauseOnHover>
              {techs.map((tech, i) => (
                <span
                  key={i}
                  className={`${styles.text} ${
                    i % 3 === 0 ? styles.highlight : ""
                  }`}
                >
                  {tech}
                </span>
              ))}
            </Marquee>
          </Container>
        </section>

        {/* Our Expertise Section*/}
        <section className={styles.expertise}>
          <Container>
            <Row>
              <Col className="mb-4">
                <span className={styles.subHeading}>Our Expertise</span>
                <h2>Dedicated Developer Services</h2>
              </Col>
            </Row>
            <Row>
              <Col xl={7} lg={7} md={6} sm={12} xs={12} className="mb-4">
                <Card className={`${styles.serviceCard1} h-100`}>
                  <FaCode className={styles.cardIcon} />
                  <h3>Dedicated Website Developers</h3>
                  <p>
                    Build scalable web applications, custom portals, and
                    enterprise platforms with Laravel, Python, ASP.NET, and
                    modern frontend frameworks.
                  </p>
                  <span>
                    <strong className="text-white font-semibold">
                      Use cases:
                    </strong>{" "}
                    SaaS platforms, e-commerce, custom CMS, internal tools
                  </span>
                  <span>
                    <strong className="text-white font-semibold">
                      Benefits:
                    </strong>{" "}
                    Faster delivery, clean architecture, SEO-optimized code
                  </span>
                  <Link href="/contact" title="Hire Now">
                    Hire Now <MdOutlineArrowOutward />
                  </Link>
                </Card>
              </Col>
              <Col xl={5} lg={5} md={6} sm={12} xs={12} className="mb-4">
                <Card className={`${styles.serviceCard2} h-100`}>
                  <CiMobile2 className={styles.cardIcon} />
                  <h3>Dedicated Mobile App Developers</h3>
                  <p>
                    Native and cross-platform mobile apps for iOS and Android.
                    React Native, Flutter, and Swift expertise.
                  </p>
                  <span>
                    <strong className="text-white font-semibold">
                      Use cases:
                    </strong>{" "}
                    Consumer apps, enterprise mobile, fintech, health tech
                  </span>
                  <span>
                    <strong className="text-white font-semibold">
                      Benefits:
                    </strong>{" "}
                    Cross-platform efficiency, pixel-perfect UI, fast iteration
                  </span>
                  <Link href="/contact" title="Hire Now">
                    Hire Now <MdOutlineArrowOutward />
                  </Link>
                </Card>
              </Col>
              <Col xl={5} lg={5} md={6} sm={12} xs={12} className="mb-4">
                <Card className={`${styles.serviceCard3} h-100`}>
                  <LuBrain className={styles.cardIcon} />
                  <h3>Dedicated AI/ML Developers</h3>
                  <p>
                    Machine learning models, NLP, computer vision, and
                    AI-powered automation for data-driven products.
                  </p>
                  <span>
                    <strong className="text-white font-semibold">
                      Use cases:
                    </strong>{" "}
                    Predictive analytics, chatbots, recommendation engines,
                    automation
                  </span>
                  <span>
                    <strong className="text-white font-semibold">
                      Benefits:
                    </strong>{" "}
                    Custom models, rapid prototyping, production-grade ML
                    pipelines
                  </span>
                  <Link href="/contact" title="Hire Now">
                    Hire Now <MdOutlineArrowOutward />
                  </Link>
                </Card>
              </Col>
              <Col xl={7} lg={7} md={6} sm={12} xs={12} className="mb-4">
                <Card className={`${styles.serviceCard4} h-100`}>
                  <LuServer className={styles.cardIcon} />
                  <h3>Dedicated DevOps Developers</h3>
                  <p>
                    CI/CD pipelines, cloud infrastructure, containerization, and
                    monitoring for seamless deployments.
                  </p>
                  <span>
                    <strong className="text-white font-semibold">
                      Use cases:
                    </strong>{" "}
                    Cloud migration, microservices, auto-scaling, infrastructure
                    as code
                  </span>
                  <span>
                    <strong className="text-white font-semibold">
                      Benefits:
                    </strong>{" "}
                    99.9% uptime, faster releases, cost-optimized infrastructure
                  </span>
                  <Link href="/contact" title="Hire Now">
                    Hire Now <MdOutlineArrowOutward />
                  </Link>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Technology Slider Section */}
        <section className={styles.technologySection}>
          <Container>
            <Row>
              <Col>
                <span className={styles.subHeading}>Technology Stack</span>
                <h2>Technologies We Master</h2>
              </Col>
            </Row>
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

        {/* Advantage Section */}
        <section className={styles.advantages}>
          <Container>
            <Row>
              <Col className="mb-4">
                <span className={styles.subHeading}>
                  The Nextupgrad Advantage
                </span>
                <h2>Why Hire Our Dedicated Developers</h2>
              </Col>
            </Row>
            <Row>
              <Col
                xl={4}
                lg={4}
                md={6}
                sm={12}
                xs={12}
                className={styles.advantageCard}
              >
                <FaGlobe className={styles.cardIcon} />
                <h3>Same Time Zone</h3>
                <p>
                  Work with developers in your time zone for real-time
                  collaboration, faster feedback loops, and smoother project
                  management.
                </p>
              </Col>
              <Col
                xl={4}
                lg={4}
                md={6}
                sm={12}
                xs={12}
                className={styles.advantageCard}
              >
                <FaDollarSign className={styles.cardIcon} />
                <h3>Cost-Effective Hiring</h3>
                <p>
                  Save up to 60% compared to building large in-house teams. No
                  overhead costs, no office space, no benefits management.
                </p>
              </Col>
              <Col
                xl={4}
                lg={4}
                md={6}
                sm={12}
                xs={12}
                className={styles.advantageCard}
              >
                <RxLightningBolt className={styles.cardIcon} />
                <h3>&lt; 1 Week Onboarding</h3>
                <p>
                  From requirements to active development in under a week. We
                  match you with the right talent fast so you don't lose
                  momentum.
                </p>
              </Col>
              <Col
                xl={4}
                lg={4}
                md={6}
                sm={12}
                xs={12}
                className={styles.advantageCard}
              >
                <GoGear className={styles.cardIcon} />
                <h3>Flexible Engagement</h3>
                <p>
                  Part-time, full-time, project-based, or dedicated teams. Scale
                  up or down as your project demands change.
                </p>
              </Col>
              <Col
                xl={4}
                lg={4}
                md={6}
                sm={12}
                xs={12}
                className={styles.advantageCard}
              >
                <FiUsers className={styles.cardIcon} />
                <h3>Pre-Vetted Talent</h3>
                <p>
                  Every developer goes through rigorous technical assessments
                  and soft skill evaluations before joining our talent pool.
                </p>
              </Col>
              <Col
                xl={4}
                lg={4}
                md={6}
                sm={12}
                xs={12}
                className={styles.advantageCard}
              >
                <IoShieldCheckmarkOutline className={styles.cardIcon} />
                <h3>Quality & Transparency</h3>
                <p>
                  Regular progress reports, sprint reviews, and direct access to
                  your developers. Full transparency from day one.
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        {/*Work Process Section */}
        <section className={styles.workProcess}>
          <Container>
            <Row>
              <Col className="mb-4">
                <span className={styles.subHeading}>Simple & Fast</span>
                <h2>How It Works</h2>
              </Col>
            </Row>
            <Row>
              <Col
                xl={3}
                lg={3}
                md={6}
                sm={12}
                xs={12}
                className={styles.workStep}
              >
                <span>01</span>
                <h3>Share Your Requirements</h3>
                <p>
                  Tell us about your project scope, tech stack, and team needs.
                  We'll analyze your requirements and identify the best
                  developer profiles.
                </p>
              </Col>
              <Col
                xl={3}
                lg={3}
                md={6}
                sm={12}
                xs={12}
                className={styles.workStep}
              >
                <span>02</span>
                <h3>Get Matched</h3>
                <p>
                  We handpick developers from our vetted talent pool who match
                  your technical requirements, work culture, and project
                  timeline.
                </p>
              </Col>
              <Col
                xl={3}
                lg={3}
                md={6}
                sm={12}
                xs={12}
                className={styles.workStep}
              >
                <span>03</span>
                <h3>Start in &lt; 1 Week</h3>
                <p>
                  Your dedicated developers onboard and integrate with your
                  team. Direct communication channels and project access from
                  day one.
                </p>
              </Col>
              <Col
                xl={3}
                lg={3}
                md={6}
                sm={12}
                xs={12}
                className={styles.workStep}
              >
                <span>04</span>
                <h3>Scale As Needed</h3>
                <p>
                  Ramp up or down based on project phases. Add specialists,
                  extend contracts, or transition to different engagement models
                  flexibly.
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Industry Section */}
        <section className={styles.industries}>
          <Container>
            <Row>
              <Col xl={6} lg={6} md={6} sm={12} xs={12} className="mb-4">
                <span className={styles.subHeading}>Who We Serve</span>
                <h2>Built for Teams That Move Fast</h2>
                <p>
                  Whether you're a two-person startup or a Fortune 500
                  enterprise, our dedicated developers adapt to your workflows,
                  tools, and pace.
                </p>
              </Col>
              <Col xl={6} lg={6} md={6} sm={12} xs={12} className="mb-4">
                <div className={styles.industryList}>
                  <div>
                    <GoRocket className={styles.industryIcon} />
                  </div>
                  <div className={styles.industryContent}>
                    <h4>Startups Building MVPs</h4>
                    <p>
                      Launch faster with dedicated developers who understand
                      startup velocity and lean methodologies.
                    </p>
                  </div>
                </div>
                <div className={styles.industryList}>
                  <div>
                    <LuBuilding2 className={styles.industryIcon} />
                  </div>
                  <div className={styles.industryContent}>
                    <h4>Agencies Needing Extra Capacity</h4>
                    <p>
                      White-label development teams that integrate seamlessly
                      with your agency workflow.
                    </p>
                  </div>
                </div>
                <div className={styles.industryList}>
                  <div>
                    <FaLandmark className={styles.industryIcon} />
                  </div>
                  <div className={styles.industryContent}>
                    <h4>Enterprise Tech Resources</h4>
                    <p>
                      Dedicated teams for large-scale projects with
                      enterprise-grade processes and compliance.
                    </p>
                  </div>
                </div>
                <div className={styles.industryList}>
                  <div>
                    <FiRefreshCw className={styles.industryIcon} />
                  </div>
                  <div className={styles.industryContent}>
                    <h4>Legacy System Modernization</h4>
                    <p>
                      Migrate and modernize outdated systems with cutting-edge
                      tech stacks and best practices.
                    </p>
                  </div>
                </div>
                <div className={styles.industryList}>
                  <div>
                    <CiCloud className={styles.industryIcon} />
                  </div>
                  <div className={styles.industryContent}>
                    <h4>AI & Cloud Products</h4>
                    <p>
                      Build intelligent, cloud-native products with specialized
                      AI/ML and DevOps developers.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Testimonial Section */}
        <section className={styles.testimonials}>
          <Container>
            <Row>
              <Col className="mb-4">
                <span className={styles.subHeading}>Client Stories</span>
                <h2>Trusted by Teams Worldwide</h2>
              </Col>
            </Row>
            <Row>
              <Col xl={4} lg={4} md={6} sm={12} xs={12} className="mb-4">
                <Card className={`${styles.testimonialCard} h-100`}>
                  <div className={styles.starRating}>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p>
                    "Nextupgrad matched us with two senior Python developers
                    within 3 days. They integrated seamlessly into our sprint
                    cycles and helped us launch our MVP two months ahead of
                    schedule."
                  </p>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.testimonialAuthorImage}>
                      <Image
                        src="/assets/hire-dedicated-developers/sarah-chen.jpeg"
                        alt="Sarah Chen"
                        width={50}
                        height={50}
                        className="rounded-circle"
                      />
                    </div>
                    <div className={styles.testimonialAuthorInfo}>
                      <p>Sarah Chen</p>
                      <span>CTO, Fintech Startup</span>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col xl={4} lg={4} md={6} sm={12} xs={12} className="mb-4">
                <Card className={`${styles.testimonialCard} h-100`}>
                  <div className={styles.starRating}>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p>
                    "We needed DevOps expertise urgently for a cloud migration.
                    Nextupgrad delivered a pre-vetted engineer who was running
                    our first CI/CD pipeline within the first week. Exceptional
                    quality."
                  </p>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.testimonialAuthorImage}>
                      <Image
                        src="/assets/hire-dedicated-developers/michael-torres.jpeg"
                        alt="Michael Torres"
                        width={50}
                        height={50}
                        className="rounded-circle"
                      />
                    </div>
                    <div className={styles.testimonialAuthorInfo}>
                      <p>Michael Torres</p>
                      <span>Director of Engineering, SaaS Company</span>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col xl={4} lg={4} md={6} sm={12} xs={12} className="mb-4">
                <Card className={`${styles.testimonialCard} h-100`}>
                  <div className={styles.starRating}>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p>
                    "As an agency, we constantly need to flex our team size.
                    Nextupgrad gives us access to Laravel and React developers
                    on-demand. It's become an essential part of how we scale."
                  </p>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.testimonialAuthorImage}>
                      <Image
                        src="/assets/hire-dedicated-developers/david-kumar.jpeg"
                        alt="David Kumar"
                        width={50}
                        height={50}
                        className="rounded-circle"
                      />
                    </div>
                    <div className={styles.testimonialAuthorInfo}>
                      <p>David Kumar</p>
                      <span>Founder, Digital Agency</span>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        {/* FAQs Section */}
        <section
          id="faq"
          className={styles.faqSection}
          data-testid="faq-section"
        >
          <Container>
            <Row className="justify-content-center">
              <Col xl={8} lg={8} md={6} sm={12} xs={12}>
                <span className={styles.subHeading}>Common Questions</span>
                <h2>Frequently Asked Questions</h2>
                <Accordion flush className={styles.accordion}>
                  {faqs.map((faq, i) => (
                    <Accordion.Item
                      eventKey={i.toString()}
                      key={i}
                      className={styles.item}
                      data-testid={`faq-item-${i}`}
                    >
                      <Accordion.Header className={styles.trigger}>
                        {faq.q}
                      </Accordion.Header>
                      <Accordion.Body className={styles.content}>
                        {faq.a}
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Contact Form Section */}
        <section className={styles.contactForm} id="contact">
          <Container>
            <Row>
              <Col xl={6} lg={6} md={6} sm={12} xs={12} className="mb-4">
                <span className={styles.subHeading}>Get Started</span>
                <h2>
                  Let's Build
                  <br />
                  Something Great
                </h2>
                <p>
                  Tell us about your project and we'll match you with the right
                  dedicated developers. No commitments, no hidden costs.
                </p>
                <ul>
                  <li>
                    <FaSquare />
                    <p>Response within 24 hours</p>
                  </li>
                  <li>
                    <FaSquare />
                    <p>Free consultation call</p>
                  </li>
                  <li>
                    <FaSquare />
                    <p>No commitment required</p>
                  </li>
                </ul>
              </Col>
              <Col xl={6} lg={6} md={6} sm={12} xs={12} className="mb-4"></Col>
            </Row>
          </Container>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <Container>
            <Row>
              <Col className="text-center">
                <h2>Ready to Scale Your Team?</h2>
                <p>
                  Get matched with dedicated developers in under 48 hours.
                  <br />
                  Start building faster, today.
                </p>
                <Link
                  href="#contact"
                  title="Hire Dedicated Developers"
                  className={styles.ctaPrimary}
                >
                  Hire Dedicated Developers <MdOutlineArrowOutward />
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
}
