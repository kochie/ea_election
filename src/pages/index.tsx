import React from "react";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";

import me from "../assets/cover_photo.jpg";

const Index = () => {
  return (
    <>
      <NextSeo
        title="Candidate Statement for Robert Koch"
        description="I'm Robert and I'm running for a position on the Victorian division of Engineers Australia"
        canonical="https://candidate.kochie.io"
        openGraph={{
          url: "https://candidate.kochie.io",
          title: "Candidate Statement for Robert Koch",
          description: `I\`m Robert and I\`m running for a position on the Victorian division of Engineers Australia`,
          images: [
            {
              url: "https://candidate.kochie.io/images/cover_photo.jpg",
              alt: "Robert Koch",
              width: 1200,
              height: 630,
            },
          ],
          site_name: "My Candidate Statement",
        }}
        twitter={{
          handle: "@kochie",
          site: "@kochie",
          cardType: "summary_large_image",
        }}
      />
      <div className="w-screen min-h-screen dark:bg-gray-800 bg-gray-100 dark:text-white">
        <div className="flex flex-col mx-auto items-center">
          <div className="flex flex-col items-center max-w-screen-lg rounded-lg dark:bg-gray-500 bg-gray-200 p-14 shadow-2xl my-20 w-min">
            <h1 className="text-3xl font-bold mb-2">Hi I&apos;m Robert,</h1>
            <h2 className="text-xl">
              I&apos;m running for the Victorian Division Committee at Engineers
              Australia
            </h2>
            <div className="my-10 flex w-3/5">
              <Image
                src={me}
                className="rounded-lg"
                height={200}
                width={200}
                objectFit="cover"
                objectPosition="top"
                alt="me"
              />
              <div className="flex justify-evenly p-5 flex-1 items-center">
                <Link href="https://me.kochie.io" passHref>
                  <FontAwesomeIcon
                    icon={faGlobe}
                    size="2x"
                    className="cursor-pointer hover:text-green-500 transform-gpu duration-300"
                  />
                </Link>
                <Link href="mailto:robert@kochie.io" passHref>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size="2x"
                    className="cursor-pointer hover:text-purple-500 transform-gpu duration-300"
                  />
                </Link>
                <Link href="https://twitter.com/kochie" passHref>
                  <FontAwesomeIcon
                    icon={faTwitter}
                    size="2x"
                    className="cursor-pointer hover:text-brand-twitter transform-gpu duration-300"
                  />
                </Link>
                <Link href="https://linkedin.com/in/rkkochie" passHref>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="2x"
                    className="cursor-pointer hover:text-brand-linkedin transform-gpu duration-300"
                  />
                </Link>
              </div>
            </div>

            <div className="w-192">
              <h1 className="font-bold text-2xl">Candidate Statement</h1>
              <p className="my-3">
                As an engineer working with the public sector, I want to empower
                and accelerate the work being done by all engineers in Victoria.
                I believe that getting involved is the best way to generate
                enthusiasm and elevate others. As a software engineer, I&apos;ve
                worked at innovative organisations, including Atlassian, and
                Amazon, turning ideas into solutions, a trait that I&apos;ll
                bring to the committee.
              </p>
              <p className="my-3">
                As a long-term committee member at UNIHACK Australia, I played a
                key role in transforming the brand from a small social club into
                a national organisation. As Vice President of the organisation,
                I planned numerous large-scale events and fostered relationships
                between industry, faculty, and students. As a member of the
                Victorian committee, I&apos;ll leverage these relationships and
                skills to create opportunities for new and old members alike to
                improve services in the Division and the wider industry.
              </p>
              <p className="my-3">
                With my qualifications in Electrical and Software Engineering, I
                can provide insights into future trends that the industry will
                move towards. This includes providing advice and counsel to the
                board about how Engineers Australia can best influence and
                contribute to the changing landscape within the Information
                Technology sector in Victoria.
              </p>
              <p className="my-3">
                While serving as president of the IT society at Monash
                University I had the opportunity to mentor and collaborate with
                students and staff. This experience gave me invaluable knowledge
                in managing a team and building a community. I plan to bring the
                enthusiasm and energy I brought there to the Victorian committee
                so that we can meet the goals of delivering national programs
                and providing leadership and direction within the division.
              </p>
              <p className="my-3">
                I want to use my time on the board to engage with members who
                feel anxious about the current landscape of the industry and
                recommend to the board new ways to assist our members.
              </p>
              <p className="my-3">
                While working in the ICT sector in Melbourne I have been
                involved in large scale projects to transform and modernise
                critical infrastructure in sectors such as Justice, Transport,
                and Finance. I know how to work in a team to achieve objectives
                and key results and I want to use this unique opportunity to
                contribute to the engineering community in Australia.
              </p>
              <p className="my-3">
                We have a unique opportunity in the coming years to dramatically
                influence the industry’s response to issues like climate change,
                and the covid recovery. I&apos;ll focus on those issues as a top
                priority.
              </p>
              <p className="my-3">
                The Covid pandemic has led to unprecedented times for engineers
                across the world, but with the country slowly emerging into a
                new era EA needs to as well. With in-person events and travel on
                the horizon, the committee should use this opportunity to push
                for better representation and renewed collaboration with
                industry, government, and faculties to tackle lofty goals like
                building diverse, sustainable industries. If elected, I&apos;ll
                use my time in the position with the skills and resources I have
                to realise this mandate, and use the reach and influence EA has
                to improve the community and our world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
