import { motion } from 'framer-motion'
import { Mail, MessageSquareText, MessageCircle, Phone } from 'lucide-react'
import { siteConfig } from '../data/site'

function ContactPage() {
  return (
    <div className="flex w-full items-center justify-center">
      <section className="section-shell w-full max-w-5xl overflow-hidden px-6 py-10 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-emerald-200/70">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Contact {siteConfig.brandName}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
              If you have any query, need notes, or want to ask something related
              to the classes, you can contact the owner directly using the email
              or phone number below.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <div className="rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-500 p-3 text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="text-lg font-semibold text-white">{siteConfig.ownerEmail}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
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

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="inline-flex rounded-2xl bg-white/10 p-3 text-cyan-200">
              <MessageSquareText className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-2xl font-semibold text-white">
              Email me right now
            </h3>
            <p className="mt-3 text-base leading-7 text-slate-300">
              Clicking the button below opens Gmail compose with the owner's email
              already filled in, so you can send your query quickly.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href={siteConfig.gmailComposeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg transition duration-300 hover:scale-105 hover:shadow-[0_18px_40px_rgba(20,184,166,0.35)]"
              >
                <Mail className="h-4 w-4" />
                Open Gmail Compose
              </a>

              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-6 py-3 text-sm font-semibold text-emerald-100 transition duration-300 hover:scale-[1.02] hover:border-emerald-300/30 hover:bg-emerald-400/15"
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
