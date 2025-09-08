"use client"

import { useState } from "react"
import {
  Brain,
  ArrowRight,
  Zap,
  Shield,
  BarChart3,
  Users,
  Github,
  BookOpen,
  MessageSquare,
  Home,
  Workflow,
  FileText,
  Settings,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import LLMForgeApp from "@/components/llmforge-app"
import WorkflowPage from "@/components/workflow-page"

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState<"home" | "training" | "workflow" | "docs">("home")

  if (currentPage === "training") {
    return <LLMForgeApp onNavigate={setCurrentPage} />
  }

  if (currentPage === "workflow") {
    return <WorkflowPage onNavigate={setCurrentPage} />
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto max-w-7xl">
          <div className="flex h-16 items-center justify-between px-4">
            <div className="flex items-center space-x-3">
              <Brain className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold tracking-tight">LLMForge</h1>
            </div>

            <nav className="hidden md:flex items-center space-x-1">
              <Button
                variant={currentPage === "home" ? "default" : "ghost"}
                onClick={() => setCurrentPage("home")}
                className="text-sm"
              >
                <Home className="mr-2 h-4 w-4" />
                Home
              </Button>
              <Button
                variant={currentPage === "training" ? "default" : "ghost"}
                onClick={() => setCurrentPage("training")}
                className="text-sm"
              >
                <Settings className="mr-2 h-4 w-4" />
                Fine-tuning
              </Button>
              <Button
                variant={currentPage === "workflow" ? "default" : "ghost"}
                onClick={() => setCurrentPage("workflow")}
                className="text-sm"
              >
                <Workflow className="mr-2 h-4 w-4" />
                Workflows
              </Button>
            </nav>

            <div className="flex items-center space-x-4">
              <Button onClick={() => setCurrentPage("training")}>
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center space-y-8">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <Zap className="mr-2 h-4 w-4" />
              Advanced LLM Fine-tuning Platform
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
              Fine-tune Language Models
              <span className="text-primary block">with Precision</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Professional-grade platform for training, fine-tuning, and deploying large language models. Built for
              researchers, developers, and enterprises who demand excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" onClick={() => setCurrentPage("training")} className="text-lg px-8 py-6">
                Start Fine-tuning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setCurrentPage("workflow")}
                className="text-lg px-8 py-6"
              >
                <Workflow className="mr-2 h-5 w-5" />
                View Workflows
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Everything you need for LLM development</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From data preparation to model deployment, our platform handles the entire fine-tuning pipeline.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <div className="rounded-lg bg-primary/10 p-3 w-fit">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Model Selection</CardTitle>
                <CardDescription>
                  Choose from popular pre-trained models or bring your own. Support for Llama, Mistral, and more.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <div className="rounded-lg bg-secondary/10 p-3 w-fit">
                  <FileText className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Data Preparation</CardTitle>
                <CardDescription>
                  Automated data preprocessing, augmentation, and validation for optimal training results.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <div className="rounded-lg bg-chart-1/10 p-3 w-fit">
                  <BarChart3 className="h-6 w-6 text-chart-1" />
                </div>
                <CardTitle>Real-time Monitoring</CardTitle>
                <CardDescription>
                  Track training progress, metrics, and performance with live dashboards and alerts.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <div className="rounded-lg bg-chart-2/10 p-3 w-fit">
                  <Shield className="h-6 w-6 text-chart-2" />
                </div>
                <CardTitle>Enterprise Security</CardTitle>
                <CardDescription>
                  SOC 2 compliant infrastructure with end-to-end encryption and audit trails.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <div className="rounded-lg bg-chart-3/10 p-3 w-fit">
                  <MessageSquare className="h-6 w-6 text-chart-3" />
                </div>
                <CardTitle>Model Comparison</CardTitle>
                <CardDescription>
                  Side-by-side testing of base vs fine-tuned models with comprehensive evaluation metrics.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <div className="rounded-lg bg-chart-4/10 p-3 w-fit">
                  <Users className="h-6 w-6 text-chart-4" />
                </div>
                <CardTitle>Team Collaboration</CardTitle>
                <CardDescription>
                  Share experiments, manage permissions, and collaborate on model development projects.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <Card className="border-0 bg-primary text-primary-foreground">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Ready to build the next generation of AI?
              </h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Join thousands of developers and researchers using LLMForge to create state-of-the-art language models.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() => setCurrentPage("training")}
                  className="text-lg px-8 py-6"
                >
                  Start Your First Model
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <Brain className="h-6 w-6 text-primary" />
              <span className="font-semibold">LLMForge</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 LLMForge. Built for the future of AI development.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
