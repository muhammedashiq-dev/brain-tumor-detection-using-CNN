import {
  MediumOutlined,
  RedditOutlined,
  DiscordOutlined,
} from "@ant-design/icons";

export const navigate = (path) => {
  if (typeof window !== "undefined") {
    window.open(path, "_blank");
  }
};

export const posts = [
  {
    title: "Early Detection of Brain Tumors with AI: A Comprehensive Review",
    image: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/BBCSW_GH_v13_1.width-1000.format-webp.webp",
    date: "December 31, 2024",
    summary:
      "This article explores the latest advancements in AI-powered brain tumor detection, highlighting the potential for improved patient outcomes.",
    route: "/ai_early_detection.ris",
  },
  {
    title: "The Impact of Multi-Modal Imaging on Brain Tumor Prediction",
    image: "https://miro.medium.com/v2/resize:fit:1000/1*vHRz2_F0wx3ZKmxojH_kQg.jpeg",
    date: "December 20, 2024",
    summary:
      "This study investigates the benefits of combining multiple imaging modalities (MRI, CT, PET) for enhanced accuracy in brain tumor prediction.",
    route: "/multi_modal_imaging.pdf",
  },
  {
    title: "AI-Driven Brain Tumor Segmentation: A Comparative Analysis",
    image: "https://d2908q01vomqb2.cloudfront.net/f1f836cb4ea6efb2a0b1b99f41ad8b103eff4b59/2022/10/25/ML-11653-Result-5.png",
    date: "November 15, 2024",
    summary:
      "A comparative analysis of different AI algorithms for segmenting brain tumors from medical images.",
    route: "/segmentation_analysis.pdf",
  },
  {
    title: "The Role of Machine Learning in Brain Tumor Grading",
    image: "https://www.mdpi.com/jimaging/jimaging-08-00205/article_deploy/html/images/jimaging-08-00205-g002.png",
    date: "November 05, 2024",
    summary:
      "This paper examines how machine learning algorithms can assist in accurately grading brain tumors, aiding in prognosis and treatment decisions.",
    route: "/ml_tumor_grading.pdf",
  },
  {
    title: "Challenges and Opportunities in AI-Based Brain Tumor Detection",
    image: "https://www.americanoncology.com/static/uploads/e82f1d8b-359a-4bf5-a96c-e82520caf9a9-1709799130483.jpg",
    date: "October 20, 2024",
    summary:
      "An overview of the challenges and opportunities in developing and deploying AI-powered solutions for brain tumor detection.",
    route: "/challenges_opportunities.pdf",
  },
  {
    title:
      "Improving Patient Outcomes through AI-Driven Brain Tumor Prediction",
    image: "https://med.stanford.edu/news/all-news/2023/08/ai-brain-cancer-glioblastoma/_jcr_content/main/image.img.780.high.png/Collage.png",
    date: "October 10, 2024",
    summary:
      "This article discusses how AI-powered prediction platforms can contribute to improved patient outcomes in brain tumor treatment.",
    route: "/improving_outcomes.pdf",
  },
];

export const researchLinks = [
  {
    icon: <RedditOutlined className="mb-1 text-2xl" />,
    title: "Reddit",
    description:
      "Contribute to our open-source projects and collaborate with our developers.",
    Link: "https://google.com", // Update with your GitHub link
  },
  {
    icon: <MediumOutlined className="mb-1 text-2xl" />,
    title: "Medium",
    description:
      "Follow us for the latest news, updates, and research findings.",
    Link: "https://google.com", // Update with your Twitter link
  },
  {
    icon: <DiscordOutlined className="mb-1 text-2xl" />,
    title: "Discord",
    description: "Connect with our team and stay informed about our work.",
    Link: "https://google.com", // Update with your LinkedIn link
  },
];
