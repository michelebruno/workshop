import React, { useState } from 'react';
import { navigate } from 'gatsby';
import { AnimatePresence, motion } from 'framer-motion';
import Question from '../components/Question';

import { ReactComponent as Cookie } from '../svg/cookies.svg';
import { ReactComponent as One } from '../svg/question1.svg';
import { ReactComponent as Three } from '../svg/question3.svg';
import { ReactComponent as Four } from '../svg/question4.svg';
import { ReactComponent as Five } from '../svg/question5.svg';

function InfographicsWrapper({ children }) {
  return (

    <motion.div
      animate="visible"
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
        },
      }}
      initial="hidden"
      className="mx-auto"
      style={{ width: 'max-content' }}
    >
      {children}
    </motion.div>
  );
}

const questions = [
  {
    title: 'How long does it take on average to read the term of use?',
    answers: [
      {
        label: '40 minutes',
        isTrue: true,
      },
      {
        label: 'More than one hour',
        isTrue: false,
      },
      {
        label: '120 minutes',
        isTrue: false,
      },
      {
        label: '5 minutes',
        isTrue: false,
      },
    ],

    children: <div className="mx-auto" style={{ width: 'max-content' }}>
      <One style={{ maxHeight: '500px' }} className="mx-auto" />
    </div>,
  },
  {
    title: 'Do you know what cookies are?',
    answers: [
      {
        label: 'Some kind of app guidelines',
        isTrue: false,
      },
      {
        label: 'Something that serve to make a site work better',
        isTrue: true,
      },
      {
        label: 'Software of the browser that allow you to visit a website',
        isTrue: false,
      },
      {
        label: 'The conditions you have to accept when you go on a site',
        isTrue: false,
      },
    ],
    children: <InfographicsWrapper>
      <Cookie style={{ maxHeight: '500px' }} className="mx-auto" />
    </InfographicsWrapper>,
  },
  {
    title: 'Why do you think social media are free?',
    answers: [
      {
        label: 'because they are paid by other companies and society',
        isTrue: false,
      },
      {
        label: 'their shares are listed on the stock exchange',
        isTrue: false,
      },
      {
        label: 'to engage people who are not willing to pay for such services on the platforms',
        isTrue: false,
      },
      {
        label: 'because they collect and sell our data to third-party',
        isTrue: true,
      },
    ],
    children: <InfographicsWrapper>
      <Three style={{ maxHeight: '500px' }} />
    </InfographicsWrapper>,
  },
  {
    title: 'What may happen after you store one of your personal pictures on your cloud/google drive?',
    answers: [
      {
        label: 'They are saved in your own server',
        isTrue: false,
      },
      {
        label: 'their shares are listed on the stock exchange',
        isTrue: false,
      },
      {
        label: 'to engage people who are not willing to pay for such services on the platforms',
        isTrue: false,
      },
      {
        label: 'They are saved in a drive always accessible by all devices.',
        isTrue: true,
      },
    ],
    children: <InfographicsWrapper>
      <Four style={{ maxHeight: '500px' }} />
    </InfographicsWrapper>,
  },
  {
    title: 'Can you delete your data from Google servers?',
    answers: [
      {
        label: 'because they are paid by other companies and society',
        isTrue: false,
      },
      {
        label: 'their shares are listed on the stock exchange',
        isTrue: false,
      },
      {
        label: 'to engage people who are not willing to pay for such services on the platforms',
        isTrue: false,
      },
      {
        label: 'because they collect and sell our data to third-party',
        isTrue: true,
      },
    ],

    children: <InfographicsWrapper>
      <Four style={{ maxHeight: '500px' }} className="mx-auto" />
    </InfographicsWrapper>,
  },
  {
    title: 'which of this action doesn’t involve data collection?',
    answers: [
      {
        label: 'Watching a film on Netflix',
        isTrue: false,
      },
      {
        label: 'Getting a fidelity card at the supermarket',
        isTrue: false,
      },
      {
        label: 'Scrolling the feed of Instagram',
        isTrue: false,
      },
      {
        label: 'Adjusting the thermostat from the smartphone',
        isTrue: false,
      },
    ],
    children: <span>
      “if the service is free, the product is you”
      gratuita e questo accade perché inseriamo, volontariamente i nostri dati all’interno dei vari portali e siti. quello che tu pubblichi, quello che tu fai, è tutto tracciato, immagazzinato e ritirato fuori nel momento del bisogno, quando qualcuno è disposto a pagare per poter utilizzare i tuoi dati. Chiunque voglia fare pubblicità sui social sta “affittando” i tuoi dati per poter far vedere solo a te il proprio spot, permettono di settorializzare, o targettizzare la nostra pubblicità e farla arrivare esattamente a chi ha bisogno.
      es. se scrivi che vuoi della pizza sul tuo programma di messaggistica preferito è molto probabile che se navighi appena dopo su Facebook ti ritrovi delle pubblicità della pizza. Questo perché anche le nostre conversazioni private sono tracciate e utilizzate a scopi commerciali.
      WhatsApp manda dati sul comportamento degli utenti a Facebook per creare pubblicità specifiche (L’utente può scegliere se condividere i propri dati con altre applicazioni o meno. Si può disattivare la condivisione dalle impostazioni di WhatsApp)
    </span>,
  },
  {
    title: 'what do you think your data cannot be used for?',
    answers: [
      {
        label: 'because they are paid by other companies and society',
        isTrue: false,
      },
      {
        label: 'their shares are listed on the stock exchange',
        isTrue: false,
      },
      {
        label: 'to engage people who are not willing to pay for such services on the platforms',
        isTrue: false,
      },
      {
        label: 'because they collect and sell our data to third-party',
        isTrue: true,
      },
    ],
    children: <span>
      “if the service is free, the product is you”
      gratuita e questo accade perché inseriamo, volontariamente i nostri dati all’interno dei vari portali e siti. quello che tu pubblichi, quello che tu fai, è tutto tracciato, immagazzinato e ritirato fuori nel momento del bisogno, quando qualcuno è disposto a pagare per poter utilizzare i tuoi dati. Chiunque voglia fare pubblicità sui social sta “affittando” i tuoi dati per poter far vedere solo a te il proprio spot, permettono di settorializzare, o targettizzare la nostra pubblicità e farla arrivare esattamente a chi ha bisogno.
      es. se scrivi che vuoi della pizza sul tuo programma di messaggistica preferito è molto probabile che se navighi appena dopo su Facebook ti ritrovi delle pubblicità della pizza. Questo perché anche le nostre conversazioni private sono tracciate e utilizzate a scopi commerciali.
      WhatsApp manda dati sul comportamento degli utenti a Facebook per creare pubblicità specifiche (L’utente può scegliere se condividere i propri dati con altre applicazioni o meno. Si può disattivare la condivisione dalle impostazioni di WhatsApp)
    </span>,
  },
];

export default function Quiz() {
  const [currentIndex, setIndex] = useState(0);

  function moveOn() {
    setIndex((i) => (questions.length <= i ? 0 : i + 1));
  }

  const [score, setScore] = useState(0);

  return (
    <main className="container d-flex min-vh-100 align-items-center">
      <div className="">
        {questions.map((question, index) => (

          <AnimatePresence key={question.title}>
            <Question
              score={score}
              onAnswer={() => setScore((s) => s + 50)}
              active={index === currentIndex}
              position={`${index + 1}/${questions.length}`}
              {...question}
              onNext={moveOn}
            />
          </AnimatePresence>

        ))}
        {currentIndex === questions.length && navigate('/about', { state: { score } })}
      </div>
    </main>
  );
}
