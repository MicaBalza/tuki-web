"use client";

import Image from "next/image";

import { SERVICES } from "@/constants/services";
import styles from "./page.module.css";
import PageContainer from "@/components/PageContainer";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Keyboard, Mousewheel } from "swiper/modules";
import { PROJECTS } from "@/constants/images";
import { useRouter } from "next/router";

export default function DynamicPage() {
  const router = useRouter();
  const { project } = router.query;

  return <PageContainer>{project}</PageContainer>;
}
