"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import styles from '../styles/Domains.module.css';
import FadeIn from "./FadeIn";

interface Domain {
  id: string;
  title: string;
  icon: string;
  description: string;
}

const domains: Domain[] = [
  {
    id: 'webdev',
    title: 'WEB DEV',
    icon: '🌐',
    description: 'Full-stack web development services including responsive design, frontend development with React, and backend integration. We create modern, scalable web applications that push the boundaries of innovation.'
  },
  {
    id: 'aiml',
    title: 'AI/ML',
    icon: '🤖',
    description: 'Cutting-edge Artificial Intelligence and Machine Learning solutions. We harness the power of AI to create intelligent systems that transform ideas into reality, powering the future of technology.'
  },
  {
    id: 'appdev',
    title: 'APP DEV',
    icon: '📱',
    description: 'Next-generation mobile application development for iOS and Android. We craft seamless, intuitive apps that deliver exceptional user experiences across all platforms.'
  }
];

const DomainCard: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    
      <section className={styles.container}>
        <FadeIn>
        <h1>Know our <a>Tech Domains...</a></h1>
        <div className={styles.cardsContainer}>
          {domains.map((domain) => (
            <motion.div
              key={domain.id}
              layoutId={`card-${domain.id}`}
              onClick={() => setSelectedId(domain.id)}
              className={styles.card}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 25px rgba(0, 157, 255, 0.5)'
              }}
              transition={{ duration: 0.2 }}
            >
              <div className={styles.cardContent}>
                <span className={styles.icon}>{domain.icon}</span>
                <motion.h2 className={styles.title}>{domain.title}</motion.h2>
              </div>
            </motion.div>
          ))}
        </div>
        </FadeIn>
        <AnimatePresence>
          {selectedId && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={styles.modalWrapper}
            >
              <motion.div
                className={styles.modalOverlay}
                onClick={() => setSelectedId(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
              />
              
              <motion.div
                layoutId={`card-${selectedId}`}
                className={styles.modal}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", bounce: 0.25 }}
              >
                {domains.find(s => s.id === selectedId) && (
                  <div className={styles.modalContent}>
                    <span className={styles.modalIcon}>
                      {domains.find(s => s.id === selectedId)?.icon}
                    </span>
                    <motion.h2 className={styles.modalTitle}>
                      {domains.find(s => s.id === selectedId)?.title}
                    </motion.h2>
                    <motion.p className={styles.modalDescription}>
                      {domains.find(s => s.id === selectedId)?.description}
                    </motion.p>
                    <motion.button
                      className={styles.closeButton}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedId(null);
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <X />
                    </motion.button>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
  );
};

export default DomainCard;