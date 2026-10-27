import { useEffect, useState } from 'react'
import './AexeroWorkshop.css'
import './AexeroAcademyComplete.css'
import './AexeroWorkshopMotion.css'
import './AexeroWorkshopNav.css'
import './AexeroWorkshopCleanups.css'
import './AexeroCurriculum.css'
import './AexeroWorkshopReveal.css'
import './AexeroMsme.css'
import './AexeroWorkshopStats.css'
import './AexeroCapabilities.css'
import MsmeRegistrationMark from './MsmeRegistrationMark'

const outcomes = [
  ['Single-board AI workflows', 'Understand how device, camera, model and interface fit into one practical system.'],
  ['Private local inference', 'Run capable models locally where privacy, latency or reliability matter.'],
  ['Computer vision foundations', 'Work with camera input, detection patterns and real-time decision flows.'],
  ['Vision + language systems', 'Connect visual signals with local language interfaces and useful automations.'],
]

const curriculum = [
  ['Day 1: Edge Computing, Vision AI & Local Language Models', 'Foundations of Edge AI, GPU video pipelines, and local SLM inference.', [['The Edge AI Landscape & Remote Setup', ['Why Edge AI? Balancing latency, bandwidth, privacy, and cloud costs.', 'Hardware tour: NVIDIA Jetson architecture (CUDA Cores, Tensor Cores, Unified Memory).', 'Connecting to cloud-hosted Jetson environments; inspecting memory with jtop and managing power modes (nvpmodel).']], ['Computer Vision & Object Detection', ['Processing video streams using OpenCV pipelines.', 'Running pre-trained YOLO object detection models on the Jetson GPU.', 'Measuring baseline performance: latency, FPS, and RAM consumption.']], ['Small Language Models (SLMs) on the Edge', ['Introduction to Edge GenAI: Running 1B-3B parameter models locally (Llama 3.2, Qwen 2.5, Phi-3.5).', 'Setting up lightweight runtimes (Ollama / llama.cpp with CUDA acceleration).', 'Writing Python wrappers to prompt local models for automated log generation and decision-making.']]]],
  ['Day 2: Hardware Acceleration, Multimodal AI & Capstone Project', 'NVIDIA TensorRT acceleration, Vision-Language Models, and a guided capstone build.', [['Model Optimization with NVIDIA TensorRT', ['Why standard PyTorch models choke on edge devices.', 'Quantization explained: Moving from FP32 to FP16 and INT8.', 'Hands-on Lab: Converting PyTorch/ONNX models into optimized TensorRT engine files to boost FPS.']], ['Multimodal AI & Vision-Language Models', ['Combining vision and language: Introduction to Vision-Language Models (VLMs) on Jetson.', 'Querying video frames with natural language prompts (e.g., “Is the worker wearing safety gear?”).']], ['Guided Capstone Build', ['Group Project: Assemble the Multimodal Edge Assistant (Vision Detection -> SLM Analysis -> Structured Alert).', 'Testing, benchmarking performance against Python/CPU inference.']], ['Wrap-Up & Career Pathways', ['Showcase of student projects, GitHub setup guidance, and industry applications in robotics/IoT.']]]],
]

const disciplines = [
  ['CSE', 'Computer Science', 'The AI model you trained, deployed locally on Jetson GPUs.'],
  ['IT', 'Information Technology', 'Private, on-premise GenAI systems with zero cloud latency.'],
  ['ECE', 'Electronics & Communication', 'Hardware acceleration on NVIDIA Jetson architecture.'],
  ['EE', 'Electrical Engineering', 'Performance-per-watt profiling and Jetson power mode control.'],
  ['ME', 'Mechanical Engineering', 'Automated visual inspection and robotics intelligence.'],
  ['Not on this list?', 'Your subject', 'If your work has a real-world Edge AI problem, this workshop can be adapted.'],
]

const audiences = ['CSE / AI students', 'Electronics and robotics learners', 'Faculty and innovation teams', 'Product and engineering teams', 'Startup communities', 'Training partners']

export default function AexeroWorkshop() {
  const [open, setOpen] = useState(null)
  const [ready, setReady] = useState(false)
  const faqs = [
    ['Do I need an embedded or electronics background?', 'No. The workshop starts with the practical context needed for the group in the room.'],
    ['Do I need to buy any hardware?', 'No. Hardware is arranged for the workshop format so participants can focus on learning and building.'],
    ['Is it live, or recorded?', 'It is delivered live, hands-on and built around practical sessions.'],
    ['Can you run this at our college or company?', 'Yes. Aexero can deliver the workshop for campuses, teams and training partners.'],
    ['What if I miss a session?', 'Contact the team before the workshop and we will discuss the practical options available.'],
  ]
  useEffect(() => {
    const reveal = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('axw-in'))
    }, { threshold: 0.1 })
    document.querySelectorAll('.axw-section, .axw-cta').forEach((element) => reveal.observe(element))
    setReady(true)
    return () => reveal.disconnect()
  }, [])

  return <div className={`axw-page ${ready ? 'axw-ready' : ''}`}>
    <header className="axw-header"><div className="axw-brand-area"><a href="/" className="axw-brand"><span>A</span>AEXERO <small>ACADEMY</small></a><a href="/" className="axw-home-link">← Aexero Solutions</a></div><nav><a href="#program">Curriculum</a><a href="#branches">Every branch</a><a href="#campuses">Where we&apos;ve taught</a><a href="#faq">Questions</a></nav><a href="#enquire" className="axw-button">Reserve a seat</a></header>
    <main>
      <section className="axw-hero"><div className="axw-glow orange" /><div className="axw-glow blue" /><div className="axw-wrap"><p className="axw-kicker">AEXERO ACADEMY / HANDS-ON EDGE AI WORKSHOP</p><h1>AI that runs <em>on the device</em>, not the cloud.</h1><p className="axw-lede">Cloud inference is easy to demo and expensive to scale. Edge AI is the other path: running real-time vision pipelines, local Small Language Models and Vision-Language Models directly on edge GPU hardware. Over two days, participants optimise models, deploy local GenAI and assemble a complete Multimodal Edge Assistant.</p><div className="axw-actions"><a className="axw-button" href="#enquire">Reserve a seat ↗</a><a className="axw-link" href="#program">▣ See the curriculum</a></div><div className="axw-hero-stats"><article><b>02</b><span>days of hands-on learning</span></article><article><b>13</b><span>guided workshop hours</span></article><article><b>02</b><span>campuses taught so far</span></article></div></div></section>

      <section className="axw-section" id="outcomes"><div className="axw-wrap"><p className="axw-kicker">WHY EDGE AI</p><h2>Four reasons the model belongs on the device.</h2><p className="axw-intro">Cameras, robots, smart meters and real-world products often need to see, decide and respond without waiting for a server round trip.</p><div className="axw-outcomes">{outcomes.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="axw-section axw-dark"><div className="axw-wrap"><p className="axw-kicker">WHAT YOU WILL BE ABLE TO DO</p><h2>What you will be able to do afterwards.</h2><p className="axw-intro">Stated as capabilities, not topics covered. If you can&apos;t do these by the end, the workshop did not work.</p><div className="axw-capabilities">{['Inspect NVIDIA Jetson GPU memory and manage hardware power profiles using jtop and nvpmodel', 'Build high-FPS OpenCV video pipelines with pre-trained YOLO object detection models', 'Run local Small Language Models (1B–3B) using Ollama and llama.cpp with CUDA acceleration', 'Quantize PyTorch/ONNX models into optimized TensorRT engine files to maximize FPS', 'Query video frames with natural-language prompts using Vision-Language Models (VLMs)', 'Assemble the Multimodal Edge Assistant capstone: Vision Detection → SLM Analysis → Structured Alert'].map((item) => <article key={item}><span aria-hidden="true">✓</span><p>{item}</p></article>)}</div></div></section>

      <section className="axw-section" id="program"><div className="axw-wrap"><p className="axw-kicker">CURRICULUM</p><h2>7 sessions, 13 hours across 2 intensive days.</h2><p className="axw-intro">From NVIDIA Jetson setup and OpenCV pipelines to TensorRT optimisation, local SLMs, and a multimodal Vision-Language capstone build.</p><div className="axw-curriculum">{curriculum.map(([title, description, sessions], dayIndex) => <article key={title}><header><p>DAY {dayIndex + 1}</p><h3>{title}</h3><span>{description}</span></header><div className="axw-session-grid">{sessions.map(([session, bullets], index) => <section key={session}><small>SESSION {index + 1}</small><h4>{session}</h4><ul>{bullets.map((bullet) => <li key={bullet}>◉ {bullet}</li>)}</ul><b>◷ {dayIndex === 1 && index === 3 ? '0.5' : '2'} hours</b></section>)}</div></article>)}</div></div></section>

      <section className="axw-section axw-dark" id="branches"><div className="axw-wrap"><p className="axw-kicker">EVERY BRANCH</p><h2>Wherever you study, this touches your subject.</h2><p className="axw-intro">Edge AI is where software, electronics, power and machines meet. Here is what the same two days look like from each department.</p><div className="axw-audiences">{disciplines.map(([code, title, text]) => <article key={title}><span>{code}</span><h3>{title}</h3><p>{text}</p><small>YOU COULD LEAVE WITH</small><b>Practical Edge AI direction for your discipline</b></article>)}</div></div></section>

      <section className="axw-section"><div className="axw-wrap"><p className="axw-kicker">READINESS</p><h2>Who this is for, and what you need first.</h2><p className="axw-intro">Prerequisites are stated plainly. If you are not there yet, tell us where you are and we will say so honestly.</p><div className="axw-readiness">{[['Who it is for', ['Students from engineering branches: CSE, IT, ECE, EE or ME', 'Anyone who wants to deploy local LLMs, SLMs, YOLO, and TensorRT on edge GPUs', 'Embedded, AI, and robotics enthusiasts building real-time vision and hardware intelligence']], ['What you need first', ['Basic Python familiarity', 'No prior machine-learning or electronics expertise required', 'Curiosity for Computer Vision, Local GenAI, and NVIDIA GPU acceleration']], ['Hardware you will use', ['NVIDIA Jetson AI architecture', 'Cloud-hosted & physical Jetson GPU development environments', 'OpenCV video streams and camera pipelines', 'Accelerated local Edge frameworks']]].map(([title, items]) => <article key={title}><h3>{title}</h3><ul>{items.map(item => <li key={item}>✦ {item}</li>)}</ul></article>)}</div></div></section>

      <section className="axw-section"><div className="axw-wrap"><p className="axw-kicker">HOW IT WORKS</p><h2>Four steps, no surprises.</h2><div className="axw-steps">{[['Share your context', 'Tell us about the audience, time available and what you want the group to take away.'], ['Set the right format', 'We shape the session plan, equipment needs and level of technical depth.'], ['Deliver the workshop', 'A focused, hands-on learning experience led by the Aexero team.'], ['Leave with direction', 'Participants leave with practical understanding and a clear next step.']].map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="axw-section axw-dark" id="campuses"><div className="axw-wrap"><p className="axw-kicker">WHERE WE&apos;VE TAUGHT</p><h2>Run on campus, with real boards on the desk.</h2><p className="axw-intro">We bring the hardware to you. These are the places this workshop has already run.</p><div className="axw-campuses">{[['MMMUT Gorakhpur', 'Gorakhpur, Uttar Pradesh', 'A hands-on Edge AI session with students, working through model compression and on-device deployment on real boards.'], ['Dayalbagh Educational Institute', 'Dayalbagh, Agra, Uttar Pradesh', 'A hands-on Edge AI session taking students from a trained model through quantization to inference running on boards.']].map(([name, location, text]) => <article key={name}><h3>{name}</h3><span>⌖ {location} &nbsp; · &nbsp; 2026</span><p>{text}</p></article>)}</div></div></section>

      <section className="axw-section"><div className="axw-wrap"><p className="axw-kicker">FROM PAST COHORTS</p><h2>What attendees said afterwards.</h2><p className="axw-intro">Quotes from the students who sat through it, named by the campus where they attended.</p><div className="axw-quotes">{[['I had trained models in a notebook before, but seeing one actually run on a board changed how I think about the whole field.', 'Shivam Singh', 'MMMUT GORAKHPUR'], ['The quantization session was the part I did not expect. We cut the model down by a factor of four and it still worked.', 'Ananya Verma', 'MMMUT GORAKHPUR'], ['Two days, and everyone left with something running on hardware. That is not how most workshops end.', 'Rohan Mehta', 'DAYALBAGH EDUCATIONAL INSTITUTE']].map(([quote, name, campus]) => <article key={name}><q>{quote}</q><p>{name}</p><small>{campus}</small></article>)}</div></div></section>

      <section className="axw-section axw-dark" id="faq"><div className="axw-wrap axw-faq"><div><p className="axw-kicker">QUESTIONS</p><h2>Everything you need to know.</h2></div><div>{faqs.map(([question, answer], index) => <article className={open === index ? 'open' : ''} key={question}><button onClick={() => setOpen(open === index ? null : index)}>{question}<b>{open === index ? '−' : '+'}</b></button>{open === index && <p>{answer}</p>}</article>)}</div></div></section>

      <section className="axw-cta" id="enquire"><div className="axw-wrap"><h2>Bring Edge AI to your campus or team.</h2><p>Tell us about your audience and we will help you shape the right workshop format.</p><a className="axw-button" href="mailto:info@aexerosolutions.in?subject=Edge%20AI%20workshop%20enquiry">Start an enquiry ↗</a></div></section>
    </main>
    <footer className="axw-footer"><a href="/" className="axw-brand"><span>A</span>AEXERO <small>SOLUTIONS</small></a><p>Software, AI and digital product delivery.</p><MsmeRegistrationMark /><small>© 2026 Aexero Solutions</small></footer>
  </div>
}
