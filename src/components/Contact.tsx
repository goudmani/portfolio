import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.03] to-transparent" />
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-wider">// CONTACT</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Collaborate</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Interested in working together? Drop me a message and I'll get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-5 gap-8"
        >
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card/30">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium text-sm">Email</p>
                <p className="text-muted-foreground text-sm">hello@datascientist.dev</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card/30">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium text-sm">Location</p>
                <p className="text-muted-foreground text-sm">San Francisco, CA</p>
              </div>
            </div>
          </div>

          <form className="md:col-span-3 space-y-4" onSubmit={e => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <Input placeholder="Name" className="bg-card/50 border-border rounded-xl h-12" />
              <Input placeholder="Email" type="email" className="bg-card/50 border-border rounded-xl h-12" />
            </div>
            <Input placeholder="Subject" className="bg-card/50 border-border rounded-xl h-12" />
            <Textarea placeholder="Your message..." className="bg-card/50 border-border rounded-xl min-h-[120px] resize-none" />
            <Button size="lg" className="rounded-full px-8 font-semibold glow-primary w-full md:w-auto">
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
