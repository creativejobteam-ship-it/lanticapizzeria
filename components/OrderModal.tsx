
import React, { useState, useEffect } from 'react';
import { X, Bike, ShoppingBag, Utensils, CheckCircle, Plus, Minus, Trash2, ArrowLeft, ArrowRight, ChevronUp } from 'lucide-react';
import { menuItems, categories, MenuItem, MenuPrice } from '../data/menuData';

interface OrderModalProps {
    isOpen: boolean;
    onClose: () => void;
    startMode?: 'menu' | 'delivery_direct'; // New prop to control entry point
}

type OrderStep = 'menu_selection' | 'selection' | 'delivery' | 'reservation' | 'success' | 'delivery_platforms';

interface CartItem {
    itemId: number;
    name: string;
    sizeLabel?: string;
    price: number;
    quantity: number;
    supplements: string[]; // Liste des noms de suppléments sélectionnés
}

interface CustomerForm {
    name: string;
    phone: string;
    email: string;
    address?: string;
    postalCode?: string;
    digicode?: string;
    date?: string;
    time?: string;
    guests?: string;
}

const SUPPLEMENTS_LIST = [
    { name: "Œuf", price: 1.00 },
    { name: "Légumes", price: 1.50 },
    { name: "Fromages", price: 2.00 },
    { name: "Viande", price: 2.00 },
    { name: "Charcuterie", price: 2.50 },
    { name: "Spécial (Foie gras, Magret, Burrata...)", price: 3.50 },
];

const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose, startMode = 'menu' }) => {
    const [step, setStep] = useState<OrderStep>('menu_selection');
    const [selectedType, setSelectedType] = useState<'delivery' | 'reservation' | null>(null);
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const [cart, setCart] = useState<CartItem[]>([]);

    // State pour gérer l'ouverture des suppléments dans le panier (index de l'item)
    const [expandedCartItem, setExpandedCartItem] = useState<number | null>(null);

    // State pour la prévisualisation au survol
    const [hoveredItem, setHoveredItem] = useState<MenuItem | null>(null);
    const [hoveredSize, setHoveredSize] = useState<MenuPrice | null>(null);

    // Initialize step based on startMode
    useEffect(() => {
        if (isOpen) {
            if (startMode === 'delivery_direct') {
                setStep('delivery_platforms');
            } else {
                setStep('menu_selection');
            }
        }
    }, [isOpen, startMode]);

    // Form State
    const [formData, setFormData] = useState<CustomerForm>({
        name: '', phone: '', email: '', address: '', postalCode: '', digicode: '', date: '', time: '12:00', guests: '2'
    });

    if (!isOpen) return null;

    // -- LOGIQUE PANIER --
    const addToCart = (item: MenuItem, priceOption: MenuPrice) => {
        setCart(prev => {
            const existing = prev.find(i => i.itemId === item.id && i.sizeLabel === priceOption.label);
            if (existing) {
                return prev.map(i =>
                    (i.itemId === item.id && i.sizeLabel === priceOption.label)
                        ? { ...i, quantity: i.quantity + 1 }
                        : i
                );
            }
            return [...prev, {
                itemId: item.id,
                name: item.name,
                sizeLabel: priceOption.label,
                price: priceOption.priceNumeric,
                quantity: 1,
                supplements: [] // Initialisation vide
            }];
        });
    };

    const removeFromCart = (index: number) => {
        setCart(prev => prev.filter((_, i) => i !== index));
        if (expandedCartItem === index) setExpandedCartItem(null);
    };

    const updateQuantity = (index: number, delta: number) => {
        setCart(prev => prev.map((item, i) => {
            if (i === index) {
                const newQ = item.quantity + delta;
                return newQ > 0 ? { ...item, quantity: newQ } : item;
            }
            return item;
        }));
    };

    const toggleSupplement = (cartIndex: number, supplementName: string) => {
        setCart(prev => prev.map((item, i) => {
            if (i === cartIndex) {
                const hasSup = item.supplements.includes(supplementName);
                let newSups;
                if (hasSup) {
                    newSups = item.supplements.filter(s => s !== supplementName);
                } else {
                    newSups = [...item.supplements, supplementName];
                }
                return { ...item, supplements: newSups };
            }
            return item;
        }));
    };

    // Calcul du prix total d'un item (base + suppléments) * quantité
    const getItemTotal = (item: CartItem) => {
        const supplementsTotal = item.supplements.reduce((sum, supName) => {
            const sup = SUPPLEMENTS_LIST.find(s => s.name === supName);
            return sum + (sup ? sup.price : 0);
        }, 0);
        return (item.price + supplementsTotal) * item.quantity;
    };

    const cartTotal = cart.reduce((acc, item) => acc + getItemTotal(item), 0);
    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    // Fonction utilitaire pour connaître la quantité totale d'un produit (toutes tailles confondues) dans le panier
    const getProductQuantityInCart = (itemId: number) => {
        return cart.filter(c => c.itemId === itemId).reduce((acc, curr) => acc + curr.quantity, 0);
    };

    // -- NAVIGATION & LOGIC --

    const handleTypeSelect = (type: 'delivery' | 'reservation') => {
        setSelectedType(type);
        if (type === 'delivery') {
            setStep('delivery');
        } else {
            setStep('reservation');
        }
    };

    const handleBack = () => {
        if (step === 'selection') setStep('menu_selection');
        if (step === 'delivery') setStep('selection');
        if (step === 'reservation') setStep('selection');
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const generateWhatsAppMessage = () => {
        let message = `🍕 *NOUVELLE COMMANDE WEB L'ANTICA* 🍕\n\n`;
        message += `📋 *Type:* ${selectedType === 'delivery' ? 'LIVRAISON 🛵' : 'RÉSERVATION 🍽'}\n`;
        message += `👤 *Nom:* ${formData.name}\n`;
        message += `📞 *Tel:* ${formData.phone}\n`;
        message += `📧 *Email:* ${formData.email}\n`;

        if (selectedType === 'delivery') {
            message += `📍 *Adresse:* ${formData.address}, ${formData.postalCode}\n`;
            if (formData.digicode) message += `🚪 *Digicode:* ${formData.digicode}\n`;
        } else {
            message += `📅 *Date:* ${formData.date}\n`;
            message += `⏰ *Heure:* ${formData.time}\n`;
            message += `👥 *Personnes:* ${formData.guests}\n`;
        }

        message += `\n🛒 *DÉTAIL DU PANIER:*\n`;
        cart.forEach(item => {
            message += `- ${item.quantity}x ${item.name} (${item.sizeLabel || 'Unique'})`;
            if (item.supplements.length > 0) {
                message += `\n  + Suppléments: ${item.supplements.join(', ')}`;
            }
            message += ` : ${getItemTotal(item).toFixed(2)}€\n`;
        });

        message += `\n💰 *TOTAL: ${cartTotal.toFixed(2)}€*`;

        return encodeURIComponent(message);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // 1. WhatsApp Redirect (Admin)
        const whatsappUrl = `https://wa.me/212611442064?text=${generateWhatsAppMessage()}`;
        window.open(whatsappUrl, '_blank');

        setStep('success');
    };

    const resetAndClose = () => {
        onClose();
        setTimeout(() => {
            if (step === 'success') {
                setCart([]);
                setFormData({
                    name: '', phone: '', email: '', address: '', postalCode: '', digicode: '', date: '', time: '12:00', guests: '2'
                });
            }

            setStep('menu_selection');
            setSelectedType(null);
            setHoveredItem(null);
            setHoveredSize(null);
            setExpandedCartItem(null);
            setActiveCategory(categories[0]);
        }, 300);
    };

    const filteredItems = menuItems.filter(item => item.category === activeCategory);

    const isPlatformMode = step === 'delivery_platforms';

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-mazzo-green/95 backdrop-blur-md transition-opacity duration-300"
                onClick={resetAndClose}
            ></div>

            {/* Close Button */}
            <button
                onClick={resetAndClose}
                className="absolute top-4 right-4 md:top-6 md:right-6 text-white hover:text-mazzo-red transition-colors z-[110]"
            >
                <X size={32} />
            </button>

            {/* Modal Content */}
            <div className={`relative w-full ${isPlatformMode ? 'max-w-xl h-auto' : 'max-w-6xl h-full md:h-[90vh]'} bg-white md:rounded-3xl overflow-hidden shadow-2xl z-[105] flex flex-col md:flex-row transition-all duration-300`}>

                {/* === LEFT SIDE / MAIN CONTENT === */}
                <div className={`flex-1 flex flex-col h-full overflow-hidden transition-all duration-300 ${!isPlatformMode && step === 'menu_selection' ? 'md:w-2/3' : 'w-full'}`}>

                    {/* Header Steps (Hidden for platform mode) */}
                    {!isPlatformMode && step !== 'success' && (
                        <div className="bg-mazzo-cream px-6 py-4 border-b border-gray-100 flex items-center justify-between shrink-0 relative">
                            <div className="flex items-center gap-4">
                                {step !== 'menu_selection' && (
                                    <button onClick={handleBack} className="p-2 hover:bg-gray-200 rounded-full transition-colors text-gray-600">
                                        <ArrowLeft size={20} />
                                    </button>
                                )}
                                <h2 className="text-xl md:text-2xl font-serif text-mazzo-green">
                                    {step === 'menu_selection' ? 'Composez votre menu' :
                                        step === 'selection' ? 'Mode de retrait' :
                                            step === 'delivery' ? 'Adresse de livraison' :
                                                step === 'reservation' ? 'Détails réservation' : ''}
                                </h2>
                            </div>
                        </div>
                    )}

                    {/* SPECIAL STEP: DELIVERY PLATFORMS */}
                    {step === 'delivery_platforms' && (
                        <div className="p-8 md:p-12 text-center animate-in zoom-in duration-300 bg-[#FDFBF7]">
                            <h2 className="text-3xl md:text-4xl font-serif text-mazzo-green mb-3">Faites vous livrer</h2>
                            <p className="text-gray-500 mb-10 text-sm tracking-widest uppercase">Choisissez votre plateforme préférée</p>

                            <div className="flex flex-col gap-5 w-full">
                                {/* Uber Eats Button */}
                                <a
                                    href="https://www.ubereats.com/fr/store/lantica-pizzeria/V1pxBpu1QRmIMRDLrFsg0w"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative flex items-center bg-black text-white p-2 pr-6 rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                                >
                                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-white/20 shrink-0 relative z-10 bg-white">
                                        <img
                                            src="/assets/images/uber%20eats.png"
                                            alt="Uber Eats"
                                            className="w-full h-full object-contain p-2"
                                        />
                                    </div>
                                    <div className="flex-1 text-center px-2">
                                        <span className="block font-serif font-bold text-2xl md:text-3xl leading-tight">Uber Eats</span>
                                        <span className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest">Livraison rapide</span>
                                    </div>
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-600 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors shrink-0">
                                        <ArrowRight size={20} />
                                    </div>
                                </a>

                                {/* Deliveroo Button */}
                                <a
                                    href="https://deliveroo.fr/fr/menu/Toulouse/les-chalets-bonnefoy/l-antica-pizzeria-borderouge"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative flex items-center bg-[#0ca397] text-white p-2 pr-6 rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                                >
                                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-white/20 shrink-0 relative z-10 bg-white">
                                        <img
                                            src="/assets/images/deliveroo.png"
                                            alt="Deliveroo"
                                            className="w-full h-full object-contain p-2"
                                        />
                                    </div>
                                    <div className="flex-1 text-center px-2">
                                        <span className="block font-serif font-bold text-2xl md:text-3xl leading-tight">Deliveroo</span>
                                        <span className="text-[10px] md:text-xs text-white/90 uppercase tracking-widest">Livraison partenaire</span>
                                    </div>
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-[#0ca397] transition-colors shrink-0">
                                        <ArrowRight size={20} />
                                    </div>
                                </a>
                            </div>
                        </div>
                    )}

                    {/* STEP 1: MENU SELECTION (GRID) */}
                    {step === 'menu_selection' && (
                        <div className="flex-1 flex flex-col overflow-hidden">
                            {/* Category Tabs */}
                            <div className="px-4 py-3 overflow-x-auto hide-scrollbar border-b border-gray-100 bg-white">
                                <div className="flex gap-2 min-w-max">
                                    {categories.map(cat => (
                                        <button
                                            key={cat}
                                            onClick={() => setActiveCategory(cat)}
                                            className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${activeCategory === cat
                                                    ? 'bg-mazzo-green text-white'
                                                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                                                }`}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Items Grid */}
                            <div className="flex-1 overflow-y-auto custom-scrollbar p-4 md:p-6 bg-[#FDFBF7]">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {filteredItems.map(item => (
                                        <div
                                            key={item.id}
                                            className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between group hover:border-mazzo-green/30 transition-colors cursor-default"
                                            onMouseEnter={() => setHoveredItem(item)}
                                            onMouseLeave={() => { setHoveredItem(null); setHoveredSize(null); }}
                                        >
                                            <div className="flex gap-4">
                                                <div className="flex-1">
                                                    <div className="flex justify-between items-start gap-2 mb-1">
                                                        <h3 className="font-serif text-lg font-bold text-gray-800 leading-tight">{item.name}</h3>
                                                        {item.isVegetarian && <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold shrink-0">VÉGÉ</span>}
                                                    </div>
                                                    <p className="text-xs text-gray-500 line-clamp-2 mb-4 leading-relaxed">{item.description}</p>
                                                </div>
                                                {/* Image Display in List (Mobile Only) */}
                                                <div className="md:hidden w-20 h-20 shrink-0 rounded-lg overflow-hidden bg-gray-100 shadow-sm border border-gray-100 relative">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="w-full h-full object-cover"
                                                        onError={(e) => {
                                                            e.currentTarget.src = "/assets/images/no-image-available.png";
                                                        }}
                                                    />
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap gap-2 mt-auto pt-2 border-t border-dashed border-gray-100">
                                                {item.prices.map((price, idx) => (
                                                    <button
                                                        key={idx}
                                                        onClick={() => addToCart(item, price)}
                                                        onMouseEnter={() => setHoveredSize(price)}
                                                        onMouseLeave={() => setHoveredSize(null)}
                                                        className="flex-1 flex items-center justify-between bg-gray-50 hover:bg-mazzo-green hover:text-white text-gray-700 px-3 py-2 rounded-lg text-xs font-bold transition-all border border-gray-200 hover:border-mazzo-green group-btn"
                                                    >
                                                        <span>{price.label || 'Unique'}</span>
                                                        <span>{price.value}</span>
                                                        <Plus size={14} className="ml-1 opacity-50" />
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* STEP 2: MODE SELECTION */}
                    {step === 'selection' && (
                        <div className="flex-1 overflow-y-auto p-8 flex flex-col items-center justify-center animate-in fade-in zoom-in duration-300">
                            <p className="text-gray-500 mb-8 text-center max-w-md">Vous avez {cartCount} articles dans votre panier pour un total de {cartTotal.toFixed(2)}€.</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
                                <button
                                    onClick={() => handleTypeSelect('delivery')}
                                    className="group flex flex-col items-center justify-center p-8 rounded-2xl border-2 border-[#eee8dc] hover:border-mazzo-red hover:bg-mazzo-cream transition-all duration-300"
                                >
                                    <div className="w-16 h-16 rounded-full bg-mazzo-green text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <Bike size={28} />
                                    </div>
                                    <h3 className="text-xl font-serif text-gray-900 mb-1">Livraison</h3>
                                    <p className="text-xs text-gray-500">Demande via WhatsApp</p>
                                </button>

                                <button
                                    onClick={() => handleTypeSelect('reservation')}
                                    className="group flex flex-col items-center justify-center p-8 rounded-2xl border-2 border-[#eee8dc] hover:border-mazzo-lime hover:bg-mazzo-cream transition-all duration-300"
                                >
                                    <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <Utensils size={28} />
                                    </div>
                                    <h3 className="text-xl font-serif text-gray-900 mb-1">Sur Place / À Emporter</h3>
                                    <p className="text-xs text-gray-500">Réserver une table ou Click & Collect</p>
                                </button>
                            </div>
                        </div>
                    )}

                    {/* STEP 3: FORMS */}
                    {(step === 'delivery' || step === 'reservation') && (
                        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-12 animate-in slide-in-from-right duration-300">
                            <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs uppercase text-gray-500 mb-1">Nom Complet</label>
                                        <input required name="name" value={formData.name} onChange={handleInputChange} type="text" className="w-full bg-mazzo-cream p-3 rounded-lg outline-none focus:ring-1 focus:ring-mazzo-green" placeholder="Jean Dupont" />
                                    </div>
                                    <div>
                                        <label className="block text-xs uppercase text-gray-500 mb-1">Téléphone</label>
                                        <input required name="phone" value={formData.phone} onChange={handleInputChange} type="tel" className="w-full bg-mazzo-cream p-3 rounded-lg outline-none focus:ring-1 focus:ring-mazzo-green" placeholder="06 12 34 56 78" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs uppercase text-gray-500 mb-1">Email</label>
                                    <input required name="email" value={formData.email} onChange={handleInputChange} type="email" className="w-full bg-mazzo-cream p-3 rounded-lg outline-none focus:ring-1 focus:ring-mazzo-green" placeholder="jean@email.com" />
                                </div>

                                {step === 'delivery' ? (
                                    <>
                                        <div>
                                            <label className="block text-xs uppercase text-gray-500 mb-1">Adresse complète</label>
                                            <input required name="address" value={formData.address} onChange={handleInputChange} type="text" className="w-full bg-mazzo-cream p-3 rounded-lg outline-none focus:ring-1 focus:ring-mazzo-green" placeholder="12 Rue de la République, Toulouse" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-xs uppercase text-gray-500 mb-1">Code postal</label>
                                                <input required name="postalCode" value={formData.postalCode} onChange={handleInputChange} type="text" className="w-full bg-mazzo-cream p-3 rounded-lg outline-none focus:ring-1 focus:ring-mazzo-green" placeholder="31000" />
                                            </div>
                                            <div>
                                                <label className="block text-xs uppercase text-gray-500 mb-1">Digicode</label>
                                                <input name="digicode" value={formData.digicode} onChange={handleInputChange} type="text" className="w-full bg-mazzo-cream p-3 rounded-lg outline-none focus:ring-1 focus:ring-mazzo-green" placeholder="Bât A..." />
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-xs uppercase text-gray-500 mb-1">Date</label>
                                                <input required name="date" value={formData.date} onChange={handleInputChange} type="date" className="w-full bg-mazzo-cream p-3 rounded-lg outline-none focus:ring-1 focus:ring-mazzo-green" />
                                            </div>
                                            <div>
                                                <label className="block text-xs uppercase text-gray-500 mb-1">Heure</label>
                                                <select name="time" value={formData.time} onChange={handleInputChange} className="w-full bg-mazzo-cream p-3 rounded-lg outline-none focus:ring-1 focus:ring-mazzo-green">
                                                    <option>12:00</option>
                                                    <option>12:30</option>
                                                    <option>13:00</option>
                                                    <option>13:30</option>
                                                    <option>19:00</option>
                                                    <option>19:30</option>
                                                    <option>20:00</option>
                                                    <option>20:30</option>
                                                    <option>21:00</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-xs uppercase text-gray-500 mb-1">Personnes</label>
                                            <input required name="guests" value={formData.guests} onChange={handleInputChange} type="number" min="1" className="w-full bg-mazzo-cream p-3 rounded-lg outline-none focus:ring-1 focus:ring-mazzo-green" placeholder="2" />
                                        </div>
                                    </>
                                )}

                                <div className="bg-green-50 border border-green-200 p-3 rounded-lg text-xs text-green-800 mt-4">
                                    En cliquant sur Confirmer, vous serez redirigé vers WhatsApp pour finaliser la commande avec notre équipe.
                                </div>

                                <button type="submit" className="w-full bg-mazzo-green text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-black transition-colors shadow-lg mt-2">
                                    {step === 'delivery' ? 'Confirmer la livraison' : 'Confirmer la réservation'} • {cartTotal.toFixed(2)}€
                                </button>
                            </form>
                        </div>
                    )}

                    {/* STEP 4: SUCCESS */}
                    {step === 'success' && (
                        <div className="flex-1 flex flex-col items-center justify-center text-center p-10 animate-in zoom-in duration-500">
                            <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                                <CheckCircle size={48} />
                            </div>
                            <h2 className="text-4xl font-serif text-mazzo-green mb-4">Merci !</h2>
                            <p className="text-gray-600 text-lg max-w-md mx-auto mb-8">
                                La commande a été transférée sur WhatsApp. <br />
                                Notre équipe va la traiter dans les plus brefs délais.
                            </p>
                            <button onClick={resetAndClose} className="bg-mazzo-green text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-black transition-colors">
                                Fermer
                            </button>
                        </div>
                    )}

                </div>

                {/* === RIGHT SIDE / CART SIDEBAR === */}
                {/* Hide cart sidebar if in platform mode */}
                {!isPlatformMode && step !== 'success' && (
                    <div className={`hidden md:flex w-1/3 border-l border-gray-200 flex-col h-full shadow-inner ${hoveredItem ? 'bg-white' : 'bg-gray-50'}`}>
                        {hoveredItem ? (
                            // === PREVIEW MODE ===
                            <>
                                <div className="p-6 bg-mazzo-green text-white border-b border-white/10 transition-colors duration-300">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-xl font-serif font-bold flex flex-col gap-1">
                                            <span className="flex items-center gap-2">
                                                <Utensils size={20} />
                                                {hoveredItem.name}
                                            </span>
                                        </h3>

                                        {/* BETTER COUNTER PILL */}
                                        {getProductQuantityInCart(hoveredItem.id) > 0 && (
                                            <div
                                                key={getProductQuantityInCart(hoveredItem.id)}
                                                className="flex items-center gap-2 bg-white text-mazzo-green px-3 py-1.5 rounded-full text-xs font-bold shadow-lg animate-in zoom-in duration-300"
                                            >
                                                <ShoppingBag size={14} className="fill-mazzo-green/20" />
                                                <span>{getProductQuantityInCart(hoveredItem.id)} dans le panier</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="flex-1 overflow-y-auto p-6 flex flex-col items-center text-center animate-in fade-in slide-in-from-right-4 duration-300">
                                    <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-lg mb-6 relative group-image bg-gray-100">
                                        <img
                                            src={hoveredItem.image}
                                            alt={hoveredItem.name}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.currentTarget.src = "/assets/images/no-image-available.png";
                                            }}
                                        />
                                    </div>
                                    <p className="text-gray-600 italic text-lg mb-6 leading-relaxed">{hoveredItem.description}</p>

                                    {hoveredSize ? (
                                        <div className="bg-mazzo-red text-white px-6 py-3 rounded-xl shadow-md animate-in zoom-in duration-200">
                                            <span className="block text-xs uppercase tracking-widest opacity-90 mb-1">{hoveredSize.label || 'Taille Unique'}</span>
                                            <span className="text-2xl font-bold">{hoveredSize.value}</span>
                                        </div>
                                    ) : (
                                        <div className="text-gray-400 text-sm border-t border-gray-100 pt-4 w-full">Survolez un prix pour voir le détail</div>
                                    )}
                                </div>
                            </>
                        ) : (
                            // === CART MODE ===
                            <>
                                <div className="p-6 bg-white border-b border-gray-100">
                                    <h3 className="text-xl font-serif font-bold text-gray-900 flex items-center gap-2">
                                        <ShoppingBag size={20} />
                                        Mon Panier
                                    </h3>
                                </div>

                                <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-4">
                                    {cart.length === 0 ? (
                                        <div className="text-center text-gray-400 mt-10">
                                            <ShoppingBag size={48} className="mx-auto mb-4 opacity-20" />
                                            <p>Votre panier est vide</p>
                                            <p className="text-xs mt-2">Ajoutez des pizzas pour commencer</p>
                                        </div>
                                    ) : (
                                        cart.map((item, index) => (
                                            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                                                <div className="p-3 flex justify-between items-start">
                                                    <div className="flex-1">
                                                        <p className="font-bold text-gray-800 text-sm">{item.name}</p>
                                                        {item.sizeLabel && <span className="text-[10px] text-gray-400 bg-gray-100 px-1 rounded mr-2">{item.sizeLabel}</span>}
                                                        {/* Affichage discret des suppléments sélectionnés */}
                                                        {item.supplements.length > 0 && (
                                                            <div className="text-[10px] text-mazzo-red mt-1">
                                                                + {item.supplements.join(', ')}
                                                            </div>
                                                        )}
                                                        <div className="mt-2 text-mazzo-green font-bold text-sm">{getItemTotal(item).toFixed(2)} €</div>
                                                    </div>

                                                    <div className="flex flex-col items-end gap-2">
                                                        <div className="flex items-center gap-3">
                                                            <div className="flex items-center border border-gray-200 rounded-md">
                                                                <button onClick={() => updateQuantity(index, -1)} className="p-1 hover:bg-gray-100 text-gray-500"><Minus size={12} /></button>
                                                                <span className="text-xs font-bold w-6 text-center">{item.quantity}</span>
                                                                <button onClick={() => updateQuantity(index, 1)} className="p-1 hover:bg-gray-100 text-gray-500"><Plus size={12} /></button>
                                                            </div>
                                                            <button onClick={() => removeFromCart(index)} className="text-red-400 hover:text-red-600">
                                                                <Trash2 size={16} />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* SECTION SUPPLÉMENTS */}
                                                <div className="border-t border-gray-100">
                                                    <button
                                                        onClick={() => setExpandedCartItem(expandedCartItem === index ? null : index)}
                                                        className="w-full flex items-center justify-between p-2 text-xs text-gray-500 hover:bg-gray-50 transition-colors"
                                                    >
                                                        <span>Ajouter un supplément</span>
                                                        {expandedCartItem === index ? <ChevronUp size={14} /> : <Plus size={14} />}
                                                    </button>

                                                    {/* Liste des suppléments (Collapsible) */}
                                                    {expandedCartItem === index && (
                                                        <div className="bg-gray-50 p-3 space-y-2 animate-in slide-in-from-top-2 duration-200">
                                                            {SUPPLEMENTS_LIST.map((sup) => (
                                                                <label key={sup.name} className="flex items-center justify-between cursor-pointer group">
                                                                    <div className="flex items-center">
                                                                        <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${item.supplements.includes(sup.name) ? 'bg-mazzo-green border-mazzo-green' : 'border-gray-300 bg-white'}`}>
                                                                            {item.supplements.includes(sup.name) && <CheckCircle size={10} className="text-white" />}
                                                                        </div>
                                                                        <input
                                                                            type="checkbox"
                                                                            className="hidden"
                                                                            checked={item.supplements.includes(sup.name)}
                                                                            onChange={() => toggleSupplement(index, sup.name)}
                                                                        />
                                                                        <span className="text-xs ml-2 text-gray-700">{sup.name}</span>
                                                                    </div>
                                                                    <span className="text-xs font-bold text-gray-500 group-hover:text-mazzo-green">+{sup.price.toFixed(2)}€</span>
                                                                </label>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>

                                <div className="p-6 bg-white border-t border-gray-200">
                                    <div className="flex justify-between items-center mb-4 text-lg font-bold text-gray-900">
                                        <span>Total</span>
                                        <span>{cartTotal.toFixed(2)} €</span>
                                    </div>
                                    {step === 'menu_selection' ? (
                                        <button
                                            disabled={cart.length === 0}
                                            onClick={() => setStep('selection')}
                                            className="w-full bg-mazzo-red disabled:bg-gray-300 text-white py-3 rounded-xl font-bold uppercase tracking-widest hover:bg-black transition-colors"
                                        >
                                            Valider mon panier
                                        </button>
                                    ) : (
                                        <div className="text-xs text-center text-gray-400">
                                            Panier validé.
                                        </div>
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                )}

                {/* MOBILE CART BOTTOM BAR (Visible only on mobile in menu_selection) */}
                {!isPlatformMode && step === 'menu_selection' && (
                    <div className="md:hidden border-t border-gray-200 bg-white p-4 flex items-center justify-between shrink-0">
                        <div className="flex flex-col">
                            <span className="text-xs text-gray-500">{cartCount} articles</span>
                            <span className="font-bold text-lg text-mazzo-green">{cartTotal.toFixed(2)} €</span>
                        </div>
                        <button
                            disabled={cart.length === 0}
                            onClick={() => setStep('selection')}
                            className="bg-mazzo-red disabled:bg-gray-300 text-white px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-widest"
                        >
                            Voir panier
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
};

export default OrderModal;
