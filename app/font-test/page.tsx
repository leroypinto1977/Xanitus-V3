export default function FontTestPage() {
  return (
    <div className="min-h-screen p-8 bg-black text-white">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold">Font Test Page</h1>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-[#a0ff4a]">
            Roboto Mono Test (Headings)
          </h2>
          <p className="text-gray-300">
            This should be Sora font for body text
          </p>

          <h1 className="text-5xl font-bold">H1 - Should be Roboto Mono</h1>
          <h2 className="text-4xl font-bold">H2 - Should be Roboto Mono</h2>
          <h3 className="text-3xl font-bold">H3 - Should be Roboto Mono</h3>
          <h4 className="text-2xl font-bold">H4 - Should be Roboto Mono</h4>
          <h5 className="text-xl font-bold">H5 - Should be Roboto Mono</h5>
          <h6 className="text-lg font-bold">H6 - Should be Roboto Mono</h6>

          <div className="space-y-2">
            <p className="text-lg">This paragraph should be in Sora font</p>
            <p className="text-base">Regular text in Sora font</p>
            <p className="text-sm">Small text in Sora font</p>
          </div>

          <div className="space-y-2">
            <div className="font-roboto-mono text-lg">
              Explicitly using font-roboto-mono class
            </div>
            <div className="font-sora text-lg">
              Explicitly using font-sora class
            </div>
          </div>

          <div className="space-y-2">
            <button className="bg-[#a0ff4a] text-black px-4 py-2 rounded font-bold">
              Button Text (Should be Roboto Mono via CSS)
            </button>
            <span className="text-gray-400">
              Span text (Should be Sora via CSS)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
