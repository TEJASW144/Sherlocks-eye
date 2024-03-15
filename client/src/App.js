import "./App.css";
import Headermint from "./Headermint";
import BoardHeader from "./BoardHeader";
import PostForm from "./PostForm";
import AuthModal from "./AuthModal";
import { useState } from "react";
import AuthModalContext from "./AuthModalContext";
function App() {
  const [showAuthModal, setShowAuthModal] = useState(true);
  return (
    <>
      <AuthModalContext.Provider
        value={{ show: showAuthModal, setShow: setShowAuthModal }}
      >
        <Headermint />
        <AuthModal />
        <BoardHeader />
        <PostForm />
        <div className="px-6 bg-gray-950 text-gray-400">
          <div className="border rounded-md border-gray-950 bg-gray-900 p-2 ">
            <h5 className="text-gray-600 mb-1">Posted by u/test 6 hours ago</h5>
            <h2 className="text-3xl mb-3 ">
              ghusfduhsb ughghfwyafgh hfisafgi gfwifweu fhewui fhewhf uif
              hiuewffui few ai
            </h2>
            <div className="text-sm leading-6">
              <p>
                Generative AI (GenAI) is a broad term that describes AI that can
                produce new content such as images, text, audio, video, or
                music. GenAI learns patterns from training data and generates
                new, unique outputs with the same statistical properties. GenAI
                uses an ML model to learn patterns and relationships in a
                dataset of human-created content, and then uses the learned
                patterns to generate new content. Google Cloud What is
                generative AI and what are its applications? | Google Cloud
                techopedia.com What is Generative AI (GenAI)? - Definition from
                Techopedia 15 Jan 2024 — Generative AI (genAI) is a broad label
                describing any type of artificial intelligence (AI) that can
                produce new text, images, video, or audio clips. Technically,
                this type of AI learns patterns from training data and generates
                new, unique outputs with the same statistical properties. GenAI
                is useful for marketing, design, and entertainment. Some
                examples of GenAI models include: GPT-3, Stable Diffusion, and
                Diffusion models. GenAI has many applications, including:
                Entertainment, Advertising, Creative arts, and Improving the
                efficiency and accuracy of existing AI systems. GenAI systems
                are often used to develop synthetic data as an alternative to
                data produced by real-world events. Such data can be deployed to
                validate mathematical models and to train machine learning
                models while preserving user privacy
              </p>
            </div>
          </div>
        </div>
      </AuthModalContext.Provider>
    </>
  );
}

export default App;
