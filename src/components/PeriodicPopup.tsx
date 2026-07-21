import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

export function PeriodicPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setOpen(true);
    }, 30000); // 30 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-5xl w-full p-0 bg-transparent border-none shadow-none flex items-center justify-center">
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-full max-w-lg lg:max-w-5xl bg-[#0A1428] border border-white/10 rounded-3xl p-6 shadow-2xl overflow-y-auto max-h-[90vh] my-auto mx-4 relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-gradient-to-r from-blue-600 to-lime-500 text-white hover:opacity-90 transition-opacity"
              >
                <X size={18} />
              </button>

              <DialogHeader className="mb-6">
                <DialogTitle className="text-xl font-bold text-center text-white">
                  Let's Build the Future Together
                </DialogTitle>
                <DialogDescription className="text-slate-400 text-center text-xs mt-1">
                  Get in touch to learn how DOVIX AI can transform your business.
                </DialogDescription>
              </DialogHeader>
              
              <form className="space-y-3">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <Label className="text-xs text-white">Full Name *</Label>
                    <Input required placeholder="Enter name" className="bg-[#07111f] border-white/10 h-9 rounded-lg" />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs text-white">Business Email *</Label>
                    <Input required type="email" placeholder="email@company.com" className="bg-[#07111f] border-white/10 h-9 rounded-lg" />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs text-white">Phone Number *</Label>
                    <Input required type="tel" placeholder="+1 (555) 000-0000" className="bg-[#07111f] border-white/10 h-9 rounded-lg" />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs text-white">Company Name</Label>
                    <Input placeholder="Your company" className="bg-[#07111f] border-white/10 h-9 rounded-lg" />
                  </div>
                </div>

                <div className="space-y-1">
                  <Label className="text-xs text-white">Service Interested In *</Label>
                  <Select required>
                    <SelectTrigger className="bg-[#07111f] border-white/10 h-9 rounded-lg">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0A1428] border-white/10 text-white">
                      <SelectItem value="ai-agents">AI Agents</SelectItem>
                      <SelectItem value="automation">AI Automation</SelectItem>
                      <SelectItem value="software">Software Development</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <Label className="text-xs text-white">Budget</Label>
                    <Input placeholder="e.g. $10k" className="bg-[#07111f] border-white/10 h-9 rounded-lg" />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs text-white">Timeline</Label>
                    <Input placeholder="e.g. 3 months" className="bg-[#07111f] border-white/10 h-9 rounded-lg" />
                  </div>
                </div>

                <div className="space-y-1">
                  <Label className="text-xs text-white">Project Details *</Label>
                  <Textarea required placeholder="Tell us about your project..." className="bg-[#07111f] border-white/10 h-16 rounded-lg" />
                </div>

                <div className="space-y-1">
                  <Label className="text-xs text-white">File Upload</Label>
                  <Input type="file" className="bg-[#07111f] border-white/10 file:text-white h-9 rounded-lg" />
                </div>

                <div className="flex items-center space-x-2 pt-1">
                  <Checkbox id="nda" className="border-white/20" />
                  <Label htmlFor="nda" className="text-xs text-white">I agree to the NDA terms</Label>
                </div>

                <div className="bg-[#07111f] p-2 rounded-lg border border-white/10 text-center text-xs text-slate-400">
                  [CAPTCHA PLACEHOLDER]
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 font-bold rounded-lg transition-colors">
                  Submit Request
                </Button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
