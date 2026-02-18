import type { Route } from "./+types/home";
import Navbar from "../../components/Navbar";
import {ArrowRight, ArrowUpRight, Clock, Layers} from "lucide-react";
import Button from "../../components/ui/Button";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
      <div className="home">
        <Navbar />
        <section className="hero">
            <div className="announce">
                <div className="dot">
                    <div className="pulse"></div>
                </div>

                <p>Introducing RoomCraft-AI 2.0</p>
            </div>

            <h1>Beautiful spaces, designed at the speed of thought with RoomCraft AI</h1>
            <p className="subtitle">RoomCraft AI helps you visualize, render, and reimagine your living spaces with AI — faster, smarter, and easier.</p>

            <div className="action">
                <a href="#upload" className="cta">Start Building <ArrowRight className="icon"/></a>
                <Button variant="outline" size="lg" className="demo">
                    Watch Demo
                </Button>
            </div>

            <div id="upload" className="upload-shell">
                <div className="grid-overlay"/>

                <div className="upload-card">
                    <div className="upload-head">
                        <div className="upload-icon">
                            <Layers className="icon" />
                        </div>

                        <h3>Upload your floor plan</h3>
                        <p>Supports JPG, PNG, formats up to 10MB</p>
                    </div>

                    <p>Upload images</p>
                </div>
            </div>
        </section>

        <section className="projects">
            <div className="section-inner">
                <div className="section-head">
                    <div className="copy">
                        <h2>Projects</h2>
                        <p>Your latest work and shared community projects, all in one place.</p>
                    </div>
                </div>

                <div className="projects-grid">
                    <div className="project-card group">
                        <div className="preview">
                            <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1974&auto=format&fit=crop" alt="Project"/>

                            <div className="badge">
                                <span>Community</span>
                            </div>
                        </div>

                        <div className="card-body">
                            <div>
                                <h3>Project Manhattan</h3>

                                <div className="meta">
                                    <Clock size={12} />
                                    <span>{new Date('01.01.2027').toLocaleDateString()}</span>
                                    <span>By JS Mastery</span>
                                </div>
                            </div>
                            <div className="arrow">
                                <ArrowUpRight size={18}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
  )

}
