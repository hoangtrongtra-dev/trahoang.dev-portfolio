
import { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { OptimizedImage } from '@/components/ui/optimized-image';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    /*{
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with React, Node.js, and Stripe integration. Features include user authentication, product management, and real-time order tracking.',
      image: '/src/assets/images/project-1.jpg',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      category: 'fullstack',
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/src/assets/images/project-2.jpg',
      technologies: ['Vue.js', 'Express', 'Socket.io', 'MongoDB'],
      category: 'frontend',
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      id: 3,
      title: 'Weather Analytics API',
      description: 'RESTful API service that aggregates weather data from multiple sources and provides analytics insights with caching and rate limiting.',
      image: '/src/assets/images/project-3.jpg',
      technologies: ['Python', 'FastAPI', 'Redis', 'Docker'],
      category: 'backend',
      github: 'https://github.com',
      live: null
    },*/
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with React.js and Tailwind CSS, featuring dark mode, animations, and optimized performance.',
      image: '/src/assets/images/project-4.jpg',
      technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      category: 'frontend',
      github: 'https://github.com/hoangtrongtra-dev/trahoang.dev-portfolio',
      live: 'https://example.com'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and contributions
            </p>
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? 'default' : 'outline'}
                onClick={() => setFilter(category.id)}
                className="flex items-center gap-2"
              >
                <Filter size={16} />
                {category.name}
              </Button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <CardHeader className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative overflow-hidden">
                    <OptimizedImage
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full"
                      width={600}
                      height={400}
                      fallback="/placeholder.svg"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-center">
                        <p className="text-sm font-medium">Click to view details</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github size={16} />
                      Code
                    </a>
                  </Button>
                  {project.live && (
                    <Button size="sm" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* No projects message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No projects found in this category.
              </p>
              <Button 
                variant="outline" 
                onClick={() => setFilter('all')}
                className="mt-4"
              >
                View All Projects
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
