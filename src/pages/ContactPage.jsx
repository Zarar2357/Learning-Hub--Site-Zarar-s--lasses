import { motion } from 'framer-motion'
import { Mail, MessageCircle, MessageSquareText, Phone } from 'lucide-react'
import { siteConfig } from '../data/site'

function ContactPage() {
  return (
    <div className="flex w-full items-center justify-center">
      <section className="section-shell w-full max-w-6xl overflow-hidden px-6 py-10 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center"
        >
          <div>
            <div className="eyebrow">
              <Mail className="h-4 w-4" />
              Contact
            </div>
            <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
              Contact {siteConfig.brandName}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              For notes, questions, support, or class-related queries, you can reach
              the owner directly through email, WhatsApp, or phone.
            </p>

            <div className="mt-8 grid gap-4">
              <div className="panel-card flex items-center gap-4">
                <div className="rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-500 p-3 text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="text-lg font-semibold text-white">{siteConfig.ownerEmail}</p>
                </div>
              </div>

              <div className="panel-card flex items-center gap-4">
                <div className="rounded-2xl bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 p-3 text-white">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Phone</p>
                  <p className="text-lg font-semibold text-white">{siteConfig.ownerPhone}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="panel-card-strong">
            <div className="inline-flex rounded-2xl bg-white/10 p-3 text-cyan-200">
              <MessageSquareText className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-3xl font-semibold text-white">
              Reach out instantly
            </h3>
            <p className="mt-3 text-base leading-8 text-slate-300">
              Use the quick actions below to open Gmail compose or jump directly
              to WhatsApp with the owner’s contact details already ready for you.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href={siteConfig.gmailComposeUrl}
                target="_blank"
                rel="noreferrer"
                className="button-primary"
              >
                <Mail className="h-4 w-4" />
                Open Gmail Compose
              </a>

              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="button-secondary border-emerald-400/20 bg-emerald-400/10 text-emerald-100 hover:border-emerald-300/30 hover:bg-emerald-400/15"
              >
                <MessageCircle className="h-4 w-4" />
                Message on WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default ContactPage
