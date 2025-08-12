
import { useState } from 'react';
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormData } from '@/lib/validations/contact';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onChange',
  });

  const watchedFields = watch();

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@trahoang.dev',
      href: 'mailto:contact@trahoang.dev'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Ho Chi Minh City, Vietnam',
      href: null
    }
  ];

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log('Form data:', data);
      
      setSubmitStatus('success');
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you within 24 hours.",
      });
      
      reset();
    } catch (error) {
      setSubmitStatus('error');
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFieldStatus = (fieldName: keyof ContactFormData) => {
    const hasError = errors[fieldName];
    const hasValue = watchedFields[fieldName];
    
    if (hasError) return 'error';
    if (hasValue) return 'success';
    return 'idle';
  };

  const getStatusIcon = (status: 'idle' | 'success' | 'error') => {
    switch (status) {
      case 'success':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'error':
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's discuss your next project or just say hello
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Let's talk about your project</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium">{info.title}</h4>
                      {info.href ? (
                        <a href={info.href} className="text-muted-foreground hover:text-primary transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="bg-muted/50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">What I can help you with:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Full-stack web development</li>
                  <li>• UI/UX design and implementation</li>
                  <li>• Performance optimization</li>
                  <li>• Technical consulting</li>
                  <li>• Code review and mentoring</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="relative">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="w-5 h-5" />
                  Send me a message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Name *
                    </Label>
                    <div className="relative">
                      <Input
                        id="name"
                        {...register('name')}
                        placeholder="Your full name"
                        className={cn(
                          "pr-10",
                          getFieldStatus('name') === 'error' && "border-red-500 focus:border-red-500",
                          getFieldStatus('name') === 'success' && "border-green-500 focus:border-green-500"
                        )}
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        {getStatusIcon(getFieldStatus('name'))}
                      </div>
                    </div>
                    {errors.name && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email *
                    </Label>
                    <div className="relative">
                      <Input
                        id="email"
                        type="email"
                        {...register('email')}
                        placeholder="your.email@example.com"
                        className={cn(
                          "pr-10",
                          getFieldStatus('email') === 'error' && "border-red-500 focus:border-red-500",
                          getFieldStatus('email') === 'success' && "border-green-500 focus:border-green-500"
                        )}
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        {getStatusIcon(getFieldStatus('email'))}
                      </div>
                    </div>
                    {errors.email && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Subject Field */}
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-medium">
                      Subject *
                    </Label>
                    <div className="relative">
                      <Input
                        id="subject"
                        {...register('subject')}
                        placeholder="What's this about?"
                        className={cn(
                          "pr-10",
                          getFieldStatus('subject') === 'error' && "border-red-500 focus:border-red-500",
                          getFieldStatus('subject') === 'success' && "border-green-500 focus:border-green-500"
                        )}
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        {getStatusIcon(getFieldStatus('subject'))}
                      </div>
                    </div>
                    {errors.subject && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">
                      Message *
                    </Label>
                    <div className="relative">
                      <Textarea
                        id="message"
                        {...register('message')}
                        placeholder="Tell me about your project..."
                        rows={5}
                        className={cn(
                          "pr-10 resize-none",
                          getFieldStatus('message') === 'error' && "border-red-500 focus:border-red-500",
                          getFieldStatus('message') === 'success' && "border-green-500 focus:border-green-500"
                        )}
                      />
                      <div className="absolute right-3 top-3">
                        {getStatusIcon(getFieldStatus('message'))}
                      </div>
                    </div>
                    {errors.message && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message.message}
                      </p>
                    )}
                    <p className="text-xs text-muted-foreground">
                      {watchedFields.message?.length || 0}/1000 characters
                    </p>
                  </div>

                  {/* Submit Status */}
                  {submitStatus === 'success' && (
                    <Alert className="border-green-500 bg-green-50 dark:bg-green-950">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <AlertDescription className="text-green-700 dark:text-green-300">
                        Message sent successfully! I'll get back to you soon.
                      </AlertDescription>
                    </Alert>
                  )}

                  {submitStatus === 'error' && (
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>
                        Failed to send message. Please try again or contact me directly.
                      </AlertDescription>
                    </Alert>
                  )}

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    disabled={isSubmitting || !isDirty || !isValid}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
