
import React, { useState } from 'react';
import { reformTopics } from '../data/reformTopics';
import Card from '../components/Card';
import Modal from '../components/Modal';
import { ReformTopic } from '../types';

/**
 * The Explainer page.
 * Displays information about different aspects of the tax reform.
 */
const Explainer: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<ReformTopic | null>(null);

  const openModal = (topic: ReformTopic) => {
    setSelectedTopic(topic);
  };

  const closeModal = () => {
    setSelectedTopic(null);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Tax Reform Explainer</h1>
      <p className="text-gray-600 mb-6">Click "Read more" on any topic to understand the key changes.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reformTopics.map(topic => (
          <Card 
            key={topic.id}
            title={topic.title}
            actionButton={
              <button
                onClick={() => openModal(topic)}
                className="font-semibold text-primary hover:text-green-800 transition-colors"
              >
                Read more &rarr;
              </button>
            }
          >
            <p>{topic.summary}</p>
          </Card>
        ))}
      </div>

      <Modal
        isOpen={!!selectedTopic}
        onClose={closeModal}
        title={selectedTopic?.title || ''}
      >
        <p className="text-gray-700 whitespace-pre-line">
          {selectedTopic?.details}
        </p>
      </Modal>
    </div>
  );
};

export default Explainer;
