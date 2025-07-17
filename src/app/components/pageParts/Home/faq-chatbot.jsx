"use client"

import { useState } from "react"
import { Button } from "@/app/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/app/components/ui/dialog"
import { MessageSquareText, ChevronRight, ChevronLeft, Package, Send, X } from "lucide-react"
import Image from "next/image"

const faqs = [
  {
    id: "faq-1",
    question: "How does delivery work?",
    answer:
      "Fast Delivery: We deliver within 1-7 business days across mainland England & Wales for in-stock items, 10-14 business days for external deliveries to Scotland (please note that we only deliver to some parts of Scotland). This excludes all out of stock items. You can see the delivery time frame under the product listing. If it says anything more than 1-7 business days this means the item is not currently in stock, but it is being restocked soon and the shipment is on its way. It's best to still place your order if you want an out of stock item, because this reserves one of the items from the stock that is coming in.",
  },
  {
    id: "faq-2",
    question: "What does the guarantee cover?",
    answer:
      "Our guarantee covers manufacturing defects for a period of 12 months from the date of delivery. This includes structural integrity, frame, and stitching. It does not cover normal wear and tear, misuse, or accidental damage.",
  },
  {
    id: "faq-3",
    question: "Can I return or exchange my product?",
    answer:
      "Yes, you can return or exchange your product within 14 days of delivery, provided it is in its original condition and packaging. Custom-made items may be subject to different return policies. Please refer to our full returns policy for more details.",
  },
  {
    id: "faq-4",
    question: "Do you offer assembly services?",
    answer:
      "Currently, we do not offer assembly services. Our sofas are designed for easy self-assembly, and detailed instructions are provided with every product. If you encounter any issues, our customer support team is happy to assist.",
  },
  {
    id: "faq-5",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards, including Visa, Mastercard, and American Express. We also offer flexible finance options through partners like Payl8r, Snap Finance, Klarna, and Clearpay. You can find more details on our Flexible Payments section.",
  },
]

export function FaqChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeQuestionId, setActiveQuestionId] = useState(null)

  const handleQuestionClick = (id) => {
    setActiveQuestionId(id)
  }

  const handleBackClick = () => {
    setActiveQuestionId(null)
  }

  const activeQuestion = faqs.find((faq) => faq.id === activeQuestionId)

  return (
    <>
     
      <Button
        className="fixed bottom-8 right-8 z-50 rounded-full w-auto h-14 shadow-2xl bg-gradient-to-br from-[#333333] to-[#222222] hover:from-[#444444] hover:to-[#333333] text-white flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close FAQs" : "Open FAQs"}
        style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}
      >
        {isOpen ? <X className="w-7 h-7 transition-transform duration-300 rotate-90" /> : 
        <div className="flex flex-row gap-2 items-center">
         <p>FAQ</p>
        <MessageSquareText className="w-7 h-7 transition-transform duration-300" />
        </div>
        }
      </Button>

      {/* FAQ Chatbot Dialog */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} noOverlay position="bottom-right">
        <DialogContent
          className={`w-[calc(100vw-2rem)] max-w-sm h-auto max-h-[380px]  flex flex-col rounded-2xl shadow-2xl bg-gradient-to-br from-[#333333] to-[#23272f] text-gray-100  border-none animate-fade-in-out ${isOpen ? 'faq-fade-in' : 'faq-fade-out'}`}
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <DialogHeader className="bg-[#444444] px-4 py-2 rounded-t-2xl flex flex-row items-center justify-between shadow-md">
            <div className="flex items-center">
              {activeQuestionId && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleBackClick}
                  className="text-gray-300 hover:bg-gray-700 mr-2 transition-colors duration-200"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
              )}
              <div className="text-xl ml-4 font-bold tracking-wide">Sitcomfy Support</div>
            </div>
          </DialogHeader>

          <div className="flex-1 overflow-y-auto p-4 space-y-1 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
            {!activeQuestionId ? (
              // Initial FAQ list view
          
                <div className="w-full space-y-4">
                  {faqs.map((faq) => (
                    <button
                      key={faq.id}
                      onClick={() => handleQuestionClick(faq.id)}
                      className="w-full flex items-center justify-between text-left px-4 py-3 rounded-xl bg-gray-100 hover:bg-purple-100 text-gray-900 font-semibold transition-all duration-200 shadow-sm hover:scale-[1.03]"
                      style={{ boxShadow: '0 2px 8px 0 rgba(80, 80, 120, 0.07)' }}
                    >
                      <div className="flex items-center">
                        <MessageSquareText className="w-4 h-4 mr-3 text-purple-600" />
                        {faq.question}
                      </div>
                      <ChevronRight className="h-4 w-4 shrink-0 text-purple-500 group-hover:translate-x-1 transition-transform" />
                    </button>
                  ))}
   

                <div className="space-y-2">
                  <div className="flex items-center bg-gradient-to-r from-gray-100 to-purple-100 p-2 rounded-xl shadow-sm animate-fade-in">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3 border-2 border-purple-300">
                      <Image src="/Icons/CustomerSupport.png" alt="Sitcomfy Support Bot" fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900 font-bold">Sitcomfy Support</p>
                      <p className="text-gray-600 text-sm">Send us a message</p>
                    </div>
                    <Button size="icon" variant="ghost" className="text-purple-600 hover:bg-purple-200 transition-colors">
                      <Send className="w-5 h-5" />
                    </Button>
                  </div>
                  
                </div>
              </div>
            ) : (
              <div className="space-y-4 animate-fade-in">
                {/* User's question bubble */}
                <div className="flex justify-end">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-2xl max-w-[80%] shadow-md animate-slide-in-right">{activeQuestion?.question}</div>
                </div>

                {/* Bot's answer bubble */}
                <div className="flex justify-start items-start">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden mr-2 flex-shrink-0 border-2 border-purple-300">
                    <Image src="/Icons/CustomerSupport.png" alt="Sitcomfy Support Bot" fill className="object-cover" />
                  </div>
                  <div className="bg-gray-100 text-gray-900 p-3 rounded-2xl max-w-[80%] shadow animate-slide-in-left">
                    <p className="font-bold mb-1 text-purple-700">Sitcomfy Support Bot</p>
                    <p>{activeQuestion?.answer}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Privacy Policy Disclaimer */}
          <div className="bg-[#444444] px-4 py-2 text-center text-xs text-gray-400 rounded-b-2xl shadow-inner animate-fade-in">
            <span>By using this chat, you consent to our Privacy Policy.</span>
          </div>

        </DialogContent>
      </Dialog>
    </>
  )
}
