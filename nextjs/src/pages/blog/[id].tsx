import AppLayout from "@/layouts/AppLayout";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin, Mail, Twitter } from "react-feather";
import CommentBox from "@/components/partials/CommentBox";
import RecentComment from "@/components/partials/RecentComment";

type Props = {};

const BlogSingle = (props: Props) => {
  return (
    <AppLayout title="Blog">
      <div className="container mb-10">
        <div className="h-60 flex flex-col justify-center items-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center">
            5 Best App Development Tool for Your Project
          </h1>
          <p className="flex items-center mt-4 text-gray-400">
            <span>March 13, 2021</span>
            <span className="h-1.5 w-1.5 rounded-full bg-primary-500 mx-2"></span>
            <span>Ahmed Shakil</span>
          </p>
        </div>
        <div>
          <div>
            <Image
              src="/images/blog-1.svg"
              height={600}
              width={1280}
              objectFit="contain"
            />
          </div>
          <div className="mt-10">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet Cras id dui. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos hymenaeos.
              Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a
              purus blandit viverra. Nullam dictum felis eu pede mollis pretium.
              Curabitur vestibulum aliquam leo. Sed libero. Praesent metus
              tellus, elementum eu, semper a, adipiscing nec
            </p>
            <div className="text-xl font-semibold my-8 border-l-4 border-primary-500 pl-6">
              A rich text element can be used with static or dynamic content For
              static content, just drop it into any page
            </div>
            <p>
              Praesent ac sem eget est egestas volutpat. Aenean tellus metus,
              bibendum sed, posuere ac, mattis non, nunc. Curabitur suscipit
              suscipit tellus. Nam quam nunc, blandit vel, luctus pulvinar,
              hendrerit id, lorem. Etiam rhoncus.Sed magna purus, fermentum eu,
              tincidunt eu, varius ut, felis. Pellentesque egestas, neque sit
              amet convallis pulvinar, justo nulla eleifend augue, ac auctor
              orci leo non est. Vestibulum purus quam, scelerisque ut, mollis
              sed, nonummy id, metus Vestibulum ullamcorper mauris at ligula.
              Phasellus consectetuer vestibulum elit. Sed a libero. Vivamus
              consectetuer hendrerit lacus. Quisque ut nisi.Cum sociis natoque
              penatibus Cras id dui. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos hymenaeos. Vivamus
              laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus
              blandit viverra. Nullam dictum felis eu pede mollis pretium.
              Curabitur vestibulum
            </p>
          </div>
          <div className="flex  mt-10">
            <Link href="#">
              <a>
                <Twitter className="mr-3" />
              </a>
            </Link>
            <Link href="#">
              <a>
                <Facebook className="mx-3" />
              </a>
            </Link>
            <Link href="#">
              <a>
                <Linkedin className="mx-3" />
              </a>
            </Link>
            <Link href="#">
              <a>
                <Mail className="mx-3" />
              </a>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="mt-10">
              <RecentComment />
            </div>
            <div className="mt-10">
              <CommentBox />
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default BlogSingle;
