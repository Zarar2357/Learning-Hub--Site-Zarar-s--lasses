import { motion } from 'framer-motion'
import { AlertTriangle, Mail, ShieldCheck } from 'lucide-react'
import { siteConfig } from '../data/site'

function PrivacyPage() {
  return (
    <div className="flex w-full items-center justify-center">
      <section className="section-shell w-full max-w-5xl overflow-hidden px-6 py-10 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <div className="flex flex-col gap-6 border-b border-white/10 pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">
                Privacy Policy & Content License
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Privacy Policy
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
                Please read this policy carefully before accessing or using the
                educational content available on {siteConfig.brandName}.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl">
              <p className="text-sm text-slate-400">Last Updated</p>
              <p className="mt-1 text-lg font-semibold text-white">
                {siteConfig.privacyLastUpdated}
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-6 text-slate-300">
            <PolicyBlock title="1. Introduction">
              <p>
                Welcome to our website. This platform provides educational content,
                including notes, explanations, and study materials for learning
                purposes.
              </p>
              <p>
                By accessing or using this website, you agree to comply with the
                terms outlined in this policy.
              </p>
            </PolicyBlock>

            <PolicyBlock title="2. Ownership of Content">
              <p>
                All content available on this website, including but not limited
                to notes, text materials, explanations, designs, graphics, layout,
                and structure, is the exclusive intellectual property of the
                website owner unless otherwise stated.
              </p>
              <p>This content is protected under applicable copyright laws.</p>
            </PolicyBlock>

            <PolicyBlock title="3. Copyright Protection">
              <p>All materials published on this website are protected under:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Copyright Act, 1957</li>
                <li>Applicable international copyright laws and treaties</li>
              </ul>
              <p>Unauthorized use of any content may result in legal action.</p>
            </PolicyBlock>

            <PolicyBlock title="4. Permitted Use">
              <p>Users are allowed to:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Access and read the content for personal and educational purposes only</li>
                <li>Share links to the website</li>
              </ul>
            </PolicyBlock>

            <PolicyBlock title="5. Prohibited Use">
              <p>You are strictly prohibited from:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Copying, reproducing, or redistributing content</li>
                <li>Uploading content to other websites, apps, or platforms</li>
                <li>Sharing content on social media, messaging apps, or public forums</li>
                <li>Selling or monetizing the content</li>
                <li>Modifying or creating derivative works</li>
                <li>Using content for commercial purposes without permission</li>
              </ul>
              <p>This applies to both partial and full reproduction of any material.</p>
            </PolicyBlock>

            <PolicyBlock title="6. No Download & Redistribution Rights">
              <p>Unless explicitly stated:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Content is not licensed for download, distribution, or offline storage</li>
                <li>Screenshots, PDFs, or copied materials must not be shared publicly</li>
              </ul>
            </PolicyBlock>

            <PolicyBlock title="7. Request for Permission">
              <p>If you wish to use content, share materials, or collaborate, you must obtain written permission from the website owner.</p>
              <a
                href={siteConfig.gmailComposeUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/10"
              >
                <Mail className="h-4 w-4" />
                {siteConfig.ownerEmail}
              </a>
            </PolicyBlock>

            <PolicyBlock title="8. User Responsibility">
              <p>Users agree to:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Use the platform ethically</li>
                <li>Not attempt to copy, scrape, or extract data</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </PolicyBlock>

            <PolicyBlock title="9. Content Updates">
              <p>Content may be updated, modified, or removed at any time without prior notice.</p>
            </PolicyBlock>

            <PolicyBlock title="10. Limitation of Liability">
              <p>While we aim to provide accurate educational content:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>We do not guarantee completeness or accuracy</li>
                <li>Users rely on content at their own discretion</li>
              </ul>
            </PolicyBlock>

            <PolicyBlock title="11. External Links">
              <p>The website may contain links to third-party resources. We are not responsible for their content or policies.</p>
            </PolicyBlock>

            <PolicyBlock title="12. Changes to This Policy">
              <p>We reserve the right to update this policy at any time. Continued use of the website constitutes acceptance of the updated terms.</p>
            </PolicyBlock>

            <PolicyBlock title="13. Contact Information">
              <p>For any concerns regarding content usage or copyright:</p>
              <div className="mt-3 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200">
                <Mail className="h-4 w-4 text-cyan-200" />
                <span className="font-medium">{siteConfig.ownerEmail}</span>
              </div>
            </PolicyBlock>

            <div className="rounded-[1.75rem] border border-amber-400/20 bg-amber-400/10 p-5 text-amber-50">
              <div className="flex items-start gap-3">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
                <div>
                  <p className="font-semibold">Final Notice</p>
                  <p className="mt-2 leading-7 text-amber-50/90">
                    Strict legal action may be taken against individuals or
                    platforms found copying, redistributing, or misusing content
                    without permission.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

function PolicyBlock({ title, children }) {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-cyan-100">
        <ShieldCheck className="h-4 w-4" />
        {title}
      </div>
      <div className="space-y-3 text-base leading-7">{children}</div>
    </div>
  )
}

export default PrivacyPage
