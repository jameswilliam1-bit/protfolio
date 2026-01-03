// @flow strict
import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

function BlogCard({ blog }) {
  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
      <div className="h-52 lg:h-60 w-full overflow-hidden rounded-t-lg">
        <Image
          src={blog.image}
          height={800}
          width={1200}
          alt={blog.title}
          className="h-full w-full object-cover group-hover:scale-110 transition-all duration-300"
        />
      </div>
      <div className="p-3 sm:p-4 flex flex-col gap-3">
        <p className="text-xs uppercase tracking-[0.2em] text-[#16f2b3]">Featured</p>
        <p className="text-lg text-white sm:text-xl font-semibold leading-tight">{blog.title}</p>
        <p className="text-sm lg:text-base text-[#d3d8e8] leading-relaxed">
          {blog.description}
        </p>
        <div className="flex items-center gap-3 pt-2">
          <Link
            href={blog.github || '#'}
            target="_blank"
            className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-[#16f2b3] transition-colors"
          >
            <FaGithub />
            <span>Code</span>
          </Link>
          <Link
            href={blog.demo || '#'}
            target="_blank"
            className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-[#16f2b3] transition-colors"
          >
            <FaExternalLinkAlt />
            <span>View Demo</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
