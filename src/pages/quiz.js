import React, { useState } from 'react';
import { navigate } from 'gatsby';
import Question from '../components/Question';

const questions = [
  {
    title: 'How long does it take on average to read the term of use?',
    answers: [
      {
        label: '40 minutes',
        isTrue: true,
      },
      {
        label: '10 minutes',
        isTrue: false,
      },
      {
        label: '10 mi nutes',
        isTrue: false,
      },
      {
        label: '1 minutes',
        isTrue: false,
      },
    ],
  },
  {
    title: 'do you know what cookies are?',
    answers: [
      {
        label: 'some kind of app guidelines',
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
        label: 'the conditions you have to accept when you go on a site',
        isTrue: false,
      },
    ],
    children: <span>
      "cookies" sono file di testo in cui sono scritte informazioni riguardo il sito visitato ed il computer usato per navigare
      hanno una scadenza e dopo un determinato periodo di tempo si cancellano automaticamente se non vengono rinnovati (visitando di nuovo un sito)
      prima parte: informazioni come il numero di sessioni o di visualizzazioni di pagina
      terza parte: possono essere trasmessi a un sito diverso da quello visitato ed implicano questioni di privacy
      Cookie di sessione: più sicuri, ricorda l’identità di un computer durante la navigazione tra pagine, quando termina la sessione, smette di funzionare
      Cookie persistenti: permanenti (quasi), memorizzare preferenze degli utenti
      Evercookie, cookie zombie e supercookie: non proprio cookie/salvataggi di dati, ma routine in grado di autoreplicarsi anche dopo che la cache del browser è stata svuotata
      Di per sé, i cookie non possono danneggiare un computer, ma possono aiutare gli hacker a infiltrarsi e recuperare le informazioni contenute nei cookie
    </span>,
  },
  {
    title: 'why do you think social media are free?',
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
  {
    title: 'what may happen after you store one of your personal pictures on your cloud/google drive?',
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
  {
    title: 'can you delete your data from google servers?',
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
          <Question
            key={question.title}
            score={score}
            onAnswer={() => setScore((s) => s + 50)}
            active={index === currentIndex}
            position={`${index + 1}/${questions.length}`}
            {...question}
            onNext={moveOn}
          />
        ))}
        {currentIndex === questions.length && navigate('/about', { state: { score } })}
      </div>
    </main>
  );
}
