import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData = [
    {
      question: "Comment se déroule une séance photo ?",
      answer: "Chaque séance commence par un échange pour vous mettre à l'aise. Nous discutons de vos attentes, puis je vous guide tout au long de la séance avec des conseils de pose personnalisés. L'atmosphère est détendue et bienveillante, dans un studio privé et luxueux."
    },
    {
      question: "Que dois-je apporter pour ma séance ?",
      answer: "Je vous fournis une liste personnalisée lors de notre consultation. Généralement : 2-3 tenues qui vous mettent en valeur, vos sous-vêtements préférés, accessoires (bijoux, foulards), et votre bonne humeur ! Je peux aussi vous conseiller sur le choix des tenues."
    },
    {
      question: "Mes photos resteront-elles confidentielles ?",
      answer: "Absolument. La confidentialité est ma priorité. Vos photos ne seront jamais partagées sans votre accord écrit explicite. Elles sont stockées de manière sécurisée et vous seule y avez accès via votre galerie privée."
    },
    {
      question: "Combien de temps pour recevoir mes photos ?",
      answer: "Vous recevez un aperçu le jour même par email. Les photos finales retouchées sont livrées sous 7 à 10 jours ouvrés via votre galerie privée sécurisée, avec possibilité de téléchargement en haute définition."
    },
    {
      question: "Puis-je commander des photos supplémentaires ?",
      answer: "Bien sûr ! Vous pouvez commander des retouches supplémentaires à partir de 45€/photo. Je propose aussi des tirages d'art, albums premium et autres produits dérivés sur demande."
    },
    {
      question: "Et si je ne me sens pas à l'aise ?",
      answer: "C'est tout à fait normal ! Mon rôle est de vous accompagner et vous rassurer. Nous prenons le temps qu'il faut, sans pression. Plus de 98% de mes clientes repartent enchantées et confiantes. Votre bien-être est ma priorité absolue."
    },
    {
      question: "Proposez-vous des séances en couple ?",
      answer: "Oui, je propose des séances couple dans la même approche élégante et artistique. Ces séances célèbrent votre complicité dans un cadre intime et raffiné. Tarifs sur demande lors de notre consultation."
    },
    {
      question: "Quels sont vos délais de réservation ?",
      answer: "Je recommande de réserver 2-3 semaines à l'avance pour avoir le choix des créneaux. Pour les demandes urgentes, n'hésitez pas à me contacter, je fais de mon mieux pour m'adapter à vos contraintes."
    },
    {
      question: "Acceptez-vous les paiements échelonnés ?",
      answer: "Oui, je propose des facilités de paiement en 2 ou 3 fois sans frais. Un acompte de 30% est demandé à la réservation, le solde étant réglé le jour de la séance. Paiement par carte, virement ou espèces."
    },
    {
      question: "Que se passe-t-il en cas d'annulation ?",
      answer: "Annulation gratuite jusqu'à 48h avant la séance. En cas d'annulation tardive, l'acompte reste acquis mais peut être reporté sur une nouvelle date dans les 6 mois. En cas de force majeure, nous trouvons toujours une solution."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24"
    >
      {/* Header */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-neutral-800 mb-6">
              Questions Fréquentes
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Toutes les réponses aux questions que vous vous posez sur nos séances photo. 
              Une question spécifique ? N'hésitez pas à me contacter directement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordéon */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-lg shadow-luxury overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-20"
                >
                  <h3 className="text-lg font-semibold text-neutral-800 pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-accent flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-neutral-600 flex-shrink-0" />
                  )}
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6 text-neutral-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* CTA Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-16 p-8 bg-gradient-to-r from-accent to-accent-light text-white rounded-lg"
          >
            <h2 className="text-2xl font-serif font-bold mb-4">
              Vous avez d'autres questions ?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Je suis là pour vous accompagner et répondre à toutes vos interrogations
            </p>
            <a
              href="/contact"
              className="bg-white text-accent hover:bg-neutral-100 font-semibold px-8 py-4 rounded-none transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Me contacter
            </a>
          </motion.div>
        </div>
      </section>

      {/* Schema.org FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </motion.div>
  );
};

export default FAQ; 