import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { BookingSection } from "@/components/sections/BookingSection";

export const metadata: Metadata = {
  title: "Contact Us | Xanitus",
  description: "Get in touch with our team for inquiries, quotes, or support",
};

export default function ContactPage() {
  return (
    <div className="pt-24">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 text-center">
          Contact <span className="text-[#a0ff4a]">Us</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-16">
          Have a question or want to discuss a project? Get in touch with our
          team.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <Card className="bg-slate-800/50 border-slate-700 overflow-hidden">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                Send Us a Message
              </h2>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#a0ff4a]/50 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#a0ff4a]/50 focus:border-transparent"
                      placeholder="Your email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#a0ff4a]/50 focus:border-transparent"
                    placeholder="Subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#a0ff4a]/50 focus:border-transparent"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <Button className="bg-[#a0ff4a] text-black hover:bg-[#8ce042] transition-colors w-full py-6">
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-[#a0ff4a] mr-4 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold mb-1">
                        Our Location
                      </h3>
                      <p className="text-gray-300">
                        123 Tech Street, Silicon Valley, CA 94043, USA
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-[#a0ff4a] mr-4 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold mb-1">
                        Phone Number
                      </h3>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-[#a0ff4a] mr-4 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold mb-1">
                        Email Address
                      </h3>
                      <p className="text-gray-300">info@xanitus.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Business Hours
                </h2>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Monday - Friday</span>
                    <span className="text-white">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Saturday</span>
                    <span className="text-white">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Sunday</span>
                    <span className="text-white">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="w-full h-64 bg-[#393e42]/20 rounded-lg border border-[#a0ff4a]/30 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">🗺️</div>
                <p className="text-white font-semibold">Google Map Embed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BookingSection />
    </div>
  );
}
