import { videos } from '@/app/data/videos';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import VideoPlayer from './VideoPlayer';

export default function PlayPage({ params }: { params: { id: string } }) {
  const video = videos.find(v => v.id === params.id);

  if (!video) {
    notFound();
  }

  return (
    <div className="max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] mx-auto p-4 mt-8">
      {/* 返回按钮 */}
      <Link
        href="/"
        className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-4"
      >
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        返回列表
      </Link>

      {/* 视频信息 */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">{video.title}</h1>
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
          <span className="bg-yellow-400 text-black px-2 py-1 rounded-full font-bold">
            {video.rating}
          </span>
          <span>{video.year}</span>
          <span>{video.country}</span>
        </div>
      </div>

      {/* 播放器组件 - 这是唯一需要客户端交互的部分 */}
      <VideoPlayer video={video} />

      {/* 视频详情 */}
      <div className="mt-6 space-y-3 text-gray-700 dark:text-gray-300">
        <div>
          <span className="font-semibold">导演：</span>
          {video.director}
        </div>
        <div>
          <span className="font-semibold">演员：</span>
          {video.actors.join(' / ')}
        </div>
        <div>
          <span className="font-semibold">类型：</span>
          {video.type.join(' / ')}
        </div>
        <div className="pt-2">
          <div className="font-semibold mb-2">剧情简介：</div>
          <p className="text-sm leading-relaxed">{video.description}</p>
        </div>
      </div>
    </div>
  );
}