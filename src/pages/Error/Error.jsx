import { motion } from "framer-motion";
import { AlertTriangle, ArrowLeft } from "lucide-react";

const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl w-full text-center bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl p-10"
      >
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-red-500/20 p-5 rounded-full">
            <AlertTriangle size={50} className="text-red-400" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-6xl font-extrabold mb-4 tracking-tight">
          404
        </h1>

        {/* Subtitle */}
        <h2 className="text-2xl font-semibold mb-2">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-300 mb-8 leading-relaxed">
          The page you are looking for doesn’t exist or has been moved. 
          Double-check the URL or go back to safety.
        </p>

        {/* Actions */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-xl font-medium hover:bg-gray-200 transition"
          >
            <ArrowLeft size={18} /> Go Back
          </button>

          <button
            onClick={() => (window.location.href = "/")}
            className="bg-indigo-600 px-5 py-2.5 rounded-xl font-medium hover:bg-indigo-500 transition"
          >
            Go Home
          </button>
        </div>

        {/* Footer note */}
        <p className="mt-8 text-sm text-gray-500">
          If you think this is a mistake, contact support.
        </p>
      </motion.div>
    </div>
  );
};

export default Error;