/**
 * Hero Section Component
 * Displays the main headline, description, and video preview
 */

import React from "react";
import { VideoModal } from "./VideoModal";
import {
  ReceiptIcon,
  ArrowRightIcon,
  CheckmarkCircleIcon,
  PlayIcon,
  CheckCircleIcon,
  StarIcon,
  LockIcon,
} from "./icons";
import { TALLY_FORM_URL } from "../constants/config";
import { useGTMTracking } from "../hooks";
import { heroCopy } from "./content";

interface HeroSectionProps {
  isModalOpen: boolean;
  onModalOpen: () => void;
  onModalClose: () => void;
  videoId: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  isModalOpen,
  onModalOpen,
  onModalClose,
  videoId,
}) => {
  const { trackButtonClick, trackVideoPlay } = useGTMTracking();

  const handleJoinWaitlist = () => {
    trackButtonClick('Request Early Access', 'hero');
    window.location.href = TALLY_FORM_URL;
  };

  const handleVideoClick = () => {
    trackVideoPlay(videoId, 'TaxWala Demo');
    onModalOpen();
  };
  return (
    <>
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Status Badge */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full">
              <span className="text-2xl">🎯</span>
              <span className="text-sm font-semibold text-gray-900">
                Invite Only — Limited Beta Access
              </span>
            </div>
          </div>

          {/* Headline */}
          <div className="text-center mb-12 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-6">
              Tax Filing Shouldn't
              <br />
              Take This Long
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              AI-powered tax automation for Indian businesses. Connect your bank, upload receipts, and let our AI
              handle the rest. <span className="font-semibold text-gray-900">Zero fees. Zero hassle.</span>
            </p>
            {/* Salaried Focus Clarity */}
            <p className="text-sm font-medium text-primary mt-6 bg-blue-50 py-3 px-6 rounded-full inline-block">
              Built for salaried professionals with Form 16 income. Scaling to freelancers & businesses later.
            </p>
          </div>

          {/* Video Preview */}
          <VideoPreview onVideoClick={handleVideoClick} />

          {/* User Avatars & Social Proof */}
          <UserProof />

          {/* Trust Indicators */}
          <TrustIndicators />

          {/* Primary CTA */}
          <div className="flex justify-center mt-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <button
              className="cta-button bg-primary text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              onClick={handleJoinWaitlist}
            >
              Request Early Access →
            </button>
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-20 pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20 pointer-events-none" />
      </section>

      {/* Video Modal */}
      <VideoModal isOpen={isModalOpen} onClose={onModalClose} videoId={videoId} />
    </>
  );
};

interface VideoPreviewProps {
  onVideoClick: () => void;
}

const VideoPreview: React.FC<VideoPreviewProps> = ({ onVideoClick }) => (
  <div className="max-w-5xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
    <div className="relative group cursor-pointer" onClick={onVideoClick}>
      <div className="aspect-video rounded-2xl overflow-hidden border-2 border-gray-200 shadow-2xl bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
          <div className="relative w-full h-full p-12 flex items-center justify-center gap-8">
            {/* Receipt Icon */}
            <div className="receipt-animation">
              <ReceiptIcon className="w-20 h-20 text-gray-400" />
            </div>

            {/* Arrow Animation */}
            <ArrowRightIcon className="w-12 h-12 text-primary arrow-animation" />

            {/* AI Processing Bars */}
            <div className="flex items-center gap-1 ai-bars-animation">
              <div className="w-2 h-8 bg-primary rounded-full bar-1" />
              <div className="w-2 h-12 bg-purple-500 rounded-full bar-2" />
              <div className="w-2 h-10 bg-blue-400 rounded-full bar-3" />
              <div className="w-2 h-14 bg-primary rounded-full bar-4" />
              <div className="w-2 h-9 bg-purple-500 rounded-full bar-5" />
            </div>

            {/* Arrow */}
            <ArrowRightIcon className="w-12 h-12 text-primary arrow-animation" />

            {/* Success Checkmark */}
            <div className="checkmark-animation">
              <CheckmarkCircleIcon className="w-20 h-20 text-green-500" />
            </div>
          </div>

          {/* Play Button Overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
            <div className="play-button-pulse relative">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <PlayIcon className="w-10 h-10 text-primary ml-1" />
              </div>
            </div>
          </div>

          {/* Video Duration Badge */}
          <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-medium">
            2:00
          </div>
        </div>
      </div>
      <p className="text-center text-gray-600 mt-4 text-sm">See how it works (2 min)</p>
    </div>
  </div>
);

const UserProof: React.FC = () => (
  <div className="mb-8 animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center -space-x-3">
        {[
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces",
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
          "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=faces",
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=faces",
        ].map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt="User"
            className="w-12 h-12 rounded-full border-4 border-white shadow-lg object-cover"
          />
        ))}
        <div className="w-12 h-12 rounded-full border-4 border-white shadow-lg bg-primary flex items-center justify-center text-white font-bold text-sm">
          +1.2k
        </div>
      </div>
      <p className="text-sm text-gray-600">
        <span className="font-bold text-primary">1,247 businesses</span> already waiting
      </p>
    </div>
  </div>
);

const TrustIndicators: React.FC = () => (
  <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-sm animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
    <div className="flex items-center gap-2">
      <CheckCircleIcon className="w-5 h-5 text-green-600" />
      <span className="font-semibold text-gray-900">100% Free Forever</span>
    </div>
    <div className="flex items-center gap-2">
      <StarIcon className="w-5 h-5 text-gold" />
      <span className="font-semibold text-gray-900">Invite Only Beta</span>
    </div>
    <div className="flex items-center gap-2">
      <LockIcon className="w-5 h-5 text-gray-700" />
      <span className="font-semibold text-gray-900">Bank-level security</span>
    </div>
  </div>
);
