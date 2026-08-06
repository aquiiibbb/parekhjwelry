import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Heart,
  Info,
  ArrowUpDown,
  Box,
  ClipboardList,
  Flame,
  Link2,
  Scissors,
  Sparkles,
  Shuffle,
  Ear,
  PenTool,
  Eraser,
  Droplets,
  Gem,
  Wrench,
  RefreshCcw,
  Maximize2,
  Circle,
  GitMerge,
  Diamond,
  Lock,
} from "lucide-react";
import "./Services.css";

const CATEGORIES = [
  "All",
  "Anklet",
  "Bracelet",
  "Chain",
  "Charm",
  "Earrings",
  "Necklace",
  "Pendant",
  "Ring",
  "Stone",
  "Watch",
  "Other",
];

const SERVICES = [
  {
    name: "3D CAD/CAM Design",
    category: "Other",
    icon: Box,
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=500&q=80",
    path: "/service/3d-cad-cam-design",
  },
  {
    name: "Appraisal",
    category: "Other",
    icon: ClipboardList,
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=500&q=80",
    path: "/appraisa",
  },
  {
    name: "Bail Fabrication",
    category: "Pendant",
    icon: Flame,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=500&q=80",
    path: "/service/bail-fabrication",
  },
  {
    name: "Chain Solder",
    category: "Chain",
    icon: Link2,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=500&q=80",
    path: "/service/chain-solder",
  },
  {
    name: "Clasp Replacement",
    category: "Bracelet",
    icon: Scissors,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCZqnAtQ9auUuFu9HjY3nhaAE1qTR9GGId65vBvdcaQg&s=10",
    path: "/service/clasp-replacement",
  },
  {
    name: "Cleanse & Restore",
    category: "Other",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=500&q=80",
    path: "/service/cleanse-restore",
  },
  {
    name: "Detangle",
    category: "Chain",
    icon: Shuffle,
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=500&q=80",
    path: "/service/detangle",
  },
  {
    name: "Earrings Backing Conversion",
    category: "Earrings",
    icon: Ear,
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=500&q=80",
    path: "/service/earrings-backing",
  },
  {
    name: "Engraving",
    category: "Other",
    icon: PenTool,
    image: "https://images.unsplash.com/photo-1569388330292-79cc1ec67270?auto=format&fit=crop&w=500&q=80",
    path: "/service/engraving",
  },
  {
    name: "Engraving Removal",
    category: "Other",
    icon: Eraser,
    image: "https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&w=500&q=80",
    path: "/service/engraving-removal",
  },
  {
    name: "Plating",
    category: "Other",
    icon: Droplets,
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=500&q=80",
    path: "/service/plating",
  },
  {
    name: "Polish",
    category: "Other",
    icon: Gem,
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=500&q=80",
    path: "/service/polish",
  },
  {
    name: "Prong Repair",
    category: "Ring",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=500&q=80",
    path: "/service/prong-repair",
  },
  {
    name: "Ring Band Renewal",
    category: "Ring",
    icon: RefreshCcw,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=500&q=80",
    path: "/service/ring-band-renewal",
  },
  {
    name: "Ring Resize",
    category: "Ring",
    icon: Maximize2,
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=500&q=80",
    path: "/service/ring-resize",
  },
  {
    name: "Ring Rounding",
    category: "Ring",
    icon: Circle,
    image: "https://images.unsplash.com/photo-1603561596112-0a132b757442?auto=format&fit=crop&w=500&q=80",
    path: "/service/ring-rounding",
  },
  {
    name: "Rings Joining & Separation",
    category: "Ring",
    icon: GitMerge,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=500&q=80",
    path: "/service/rings-joining-separation",
  },
  {
    name: "Stone Replacement",
    category: "Stone",
    icon: Diamond,
    image: "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?auto=format&fit=crop&w=500&q=80",
    path: "/service/stone-replacement",
  },
  {
    name: "Stone Tightening",
    category: "Stone",
    icon: Lock,
    image: "https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=500&q=80",
    path: "/service/stone-tightening",
  },
];

export default function Services() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [favorites, setFavorites] = useState(() => new Set());
  const [imageError, setImageError] = useState({});

  const toggleFavorite = (e, name) => {
    e.stopPropagation(); // Prevents card navigation when clicking heart
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  const handleInfoClick = (e) => {
    e.stopPropagation(); // Prevents card navigation when clicking info
  };

  const handleImageError = (name) => {
    setImageError((prev) => ({ ...prev, [name]: true }));
  };

  const handleCardClick = (path) => {
    if (path) {
      navigate(path);
    }
  };

  const filtered = useMemo(() => {
    return SERVICES.filter((s) => {
      const matchesCategory =
        activeCategory === "All" || s.category === activeCategory;
      const matchesQuery = s.name
        .toLowerCase()
        .includes(query.trim().toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  return (
    <section className="cw-section">
      <h2 className="cw-heading">Services</h2>

      {/* Search + actions row */}
      <div className="cw-toolbar">
        <div className="cw-search">
          <Search size={18} color="#9a988f" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search services..."
          />
        </div>

        <button className="cw-btn-custom" onClick={() => navigate("/customservice")}>
          Custom Service
        </button>
        <button className="cw-btn-start" onClick={() => navigate("/start")}>
          Start my Service
        </button>
      </div>

      {/* Category pills */}
      <div className="cw-categories">
        <div className="cw-categories-list">
          {CATEGORIES.map((cat) => {
            const active = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`cw-pill${active ? " active" : ""}`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <button className="cw-sort">
          Sort <ArrowUpDown size={14} />
        </button>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <p className="cw-empty">No services match your search.</p>
      ) : (
        <div className="cw-grid">
          {filtered.map(({ name, icon: Icon, image, path }) => {
            const isFav = favorites.has(name);
            const hasError = imageError[name];

            return (
              <div
                key={name}
                className="cw-card"
                onClick={() => handleCardClick(path)}
              >
                <div className="cw-card-media">
                  {!hasError && image ? (
                    <img
                      src={image}
                      alt={name}
                      className="cw-card-img"
                      onError={() => handleImageError(name)}
                    />
                  ) : (
                    <Icon size={44} strokeWidth={1.3} color="#b9855f" />
                  )}

                  <span className="cw-icon-btn info" onClick={handleInfoClick}>
                    <Info size={13} color="#8a897f" />
                  </span>

                  <button
                    onClick={(e) => toggleFavorite(e, name)}
                    className="cw-icon-btn fav"
                  >
                    <Heart
                      size={13}
                      color={isFav ? "#c0705a" : "#8a897f"}
                      fill={isFav ? "#c0705a" : "none"}
                    />
                  </button>
                </div>

                <p className="cw-card-title">{name}</p>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}