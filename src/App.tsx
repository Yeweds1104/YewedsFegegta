import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Zap,
  Settings,
  Wrench,
  Shield,
  Users,
  Award,
  Factory,
  Building2,
  Truck,
  Lightbulb,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle,
  Star,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "industries", "about", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                Yeweds, Fegegta & Their Friends
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: "home", label: "Home" },
                { id: "services", label: "Services" },
                { id: "industries", label: "Industries" },
                { id: "about", label: "About" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-1">
              {[
                { id: "home", label: "Home" },
                { id: "services", label: "Services" },
                { id: "industries", label: "Industries" },
                { id: "about", label: "About" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Powering Industry with
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                    {" "}
                    Precision Engineering
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                  Yeweds, Fegegta and Their Friends delivers cutting-edge
                  electro-mechanical solutions that drive industrial excellence
                  across diverse sectors. From concept to implementation, we
                  engineer the future of industrial automation.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection("services")}
                  className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300"
                >
                  Get Quote
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-blue-200 text-sm">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-blue-200 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-blue-200 text-sm">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                    <Settings className="h-12 w-12 mx-auto mb-4 text-cyan-300" />
                    <h3 className="font-semibold mb-2">Automation</h3>
                    <p className="text-sm text-blue-100">
                      Industrial Process Control
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                    <Zap className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
                    <h3 className="font-semibold mb-2">Electrical</h3>
                    <p className="text-sm text-blue-100">
                      Power Systems Design
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                    <Wrench className="h-12 w-12 mx-auto mb-4 text-orange-300" />
                    <h3 className="font-semibold mb-2">Mechanical</h3>
                    <p className="text-sm text-blue-100">
                      Precision Engineering
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                    <Shield className="h-12 w-12 mx-auto mb-4 text-green-300" />
                    <h3 className="font-semibold mb-2">Safety</h3>
                    <p className="text-sm text-blue-100">
                      Compliance & Standards
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive electro-mechanical solutions tailored to meet the
              unique demands of modern industry and drive operational
              excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Settings,
                title: "Industrial Automation",
                description:
                  "Complete automation solutions including PLC programming, SCADA systems, and process control to optimize your operations.",
                features: [
                  "PLC Programming",
                  "SCADA Development",
                  "Process Control",
                  "System Integration",
                ],
              },
              {
                icon: Zap,
                title: "Electrical Systems",
                description:
                  "Professional electrical design, installation, and maintenance services for industrial and commercial applications.",
                features: [
                  "Power Distribution",
                  "Motor Control",
                  "Lighting Systems",
                  "Electrical Testing",
                ],
              },
              {
                icon: Wrench,
                title: "Mechanical Engineering",
                description:
                  "Precision mechanical design and fabrication services for custom industrial equipment and machinery.",
                features: [
                  "Custom Fabrication",
                  "Equipment Design",
                  "Maintenance Solutions",
                  "Retrofitting",
                ],
              },
              {
                icon: Shield,
                title: "Safety & Compliance",
                description:
                  "Comprehensive safety assessments and compliance solutions to ensure your operations meet industry standards.",
                features: [
                  "Safety Audits",
                  "Risk Assessment",
                  "Code Compliance",
                  "Training Programs",
                ],
              },
              {
                icon: Users,
                title: "Project Management",
                description:
                  "End-to-end project management ensuring on-time delivery and seamless integration of all systems.",
                features: [
                  "Project Planning",
                  "Resource Management",
                  "Quality Control",
                  "Commissioning",
                ],
              },
              {
                icon: Award,
                title: "Maintenance & Support",
                description:
                  "Ongoing maintenance and technical support to ensure optimal performance and minimize downtime.",
                features: [
                  "Preventive Maintenance",
                  "Emergency Response",
                  "Technical Support",
                  "Training Services",
                ],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expertise spans across multiple industries, delivering
              specialized solutions that meet the unique challenges of each
              sector.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Factory,
                title: "Manufacturing",
                description:
                  "Advanced automation and control systems for manufacturing facilities.",
              },
              {
                icon: Building2,
                title: "Commercial Buildings",
                description:
                  "Building automation, electrical systems, and energy management.",
              },
              {
                icon: Truck,
                title: "Transportation",
                description:
                  "Electrical and mechanical systems for transportation infrastructure.",
              },
              {
                icon: Lightbulb,
                title: "Energy & Utilities",
                description:
                  "Power generation, distribution, and renewable energy solutions.",
              },
            ].map((industry, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-blue-100 to-blue-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                  <industry.icon className="h-10 w-10 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {industry.title}
                </h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                About Yeweds, Fegegta & Their Friends
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                With over 7 years of combined experience in electro-mechanical
                engineering, our team has established itself as a trusted
                partner for industries seeking innovative and reliable
                solutions.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-700 p-2 rounded-lg">
                    <Award className="h-6 w-6 text-blue-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Excellence in Engineering
                    </h3>
                    <p className="text-blue-100">
                      Our commitment to precision and quality has earned us
                      recognition across multiple industries and long-lasting
                      client relationships.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-700 p-2 rounded-lg">
                    <Users className="h-6 w-6 text-blue-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Collaborative Approach
                    </h3>
                    <p className="text-blue-100">
                      We work closely with our clients to understand their
                      unique challenges and develop customized solutions that
                      exceed expectations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-700 p-2 rounded-lg">
                    <Lightbulb className="h-6 w-6 text-blue-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Innovation Focus
                    </h3>
                    <p className="text-blue-100">
                      We stay at the forefront of technology, continuously
                      updating our skills and tools to provide cutting-edge
                      solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-8 text-center">
                  Why Choose Us?
                </h3>
                <div className="space-y-6">
                  {[
                    { label: "Project Success Rate", value: "100%" },
                    { label: "On-Time Delivery", value: "98%" },
                    { label: "Client Retention", value: "95%" },
                    { label: "Cost Efficiency", value: "25%" },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <span className="text-blue-100">{stat.label}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold">{stat.value}</span>
                        <Star className="h-5 w-5 text-yellow-400" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to discuss your next project? Contact us today for a
              consultation and discover how we can help optimize your
              operations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">
                        +251 913 564870 / +251 923 735867
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">yewedsdagne@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Address</h4>
                      <p className="text-gray-600">
                        Mojo, Oromia
                        <br />
                        Ethiopia
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Request a Quote</h3>
                <p className="text-blue-100 mb-6">
                  Get a personalized quote for your project. Our team will
                  assess your needs and provide a comprehensive proposal within
                  24 hours.
                </p>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
                  Start Your Project
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your Company Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-2 rounded-lg">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">
                  Yeweds, Fegegta & Their Friends
                </span>
              </div>
              <p className="text-gray-400 mb-4">
                Leading electro-mechanical engineering solutions for modern
                industry.
              </p>
              <p className="text-gray-400 text-sm">
                © 2024 Yeweds, Fegegta and Their Friends. All rights reserved.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Industrial Automation</li>
                <li>Electrical Systems</li>
                <li>Mechanical Engineering</li>
                <li>Safety & Compliance</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Industries</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Manufacturing</li>
                <li>Commercial Buildings</li>
                <li>Transportation</li>
                <li>Energy & Utilities</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
