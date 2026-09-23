import { useMemo, useState } from "react";

const centres = [
  { id: "haldi", name: "Haldi River Collection Centre", area: "Kalyanpur", distance: 2.4, hours: "6:30 am – 1:00 pm", open: true, wait: 18, accent: "clay", note: "Best for milk & vegetables" },
  { id: "sahyadri", name: "Sahyadri Farmers Hub", area: "Nandgaon", distance: 5.8, hours: "7:00 am – 2:30 pm", open: true, wait: 11, accent: "leaf", note: "Fastest moving queue today" },
  { id: "sonapur", name: "Sonapur Market Yard", area: "Sonapur", distance: 8.1, hours: "6:00 am – 12:30 pm", open: false, wait: 34, accent: "sun", note: "Closes in 2 hours tomorrow" },
  { id: "pipalgaon", name: "Pipalgaon Co-op Point", area: "Pipalgaon", distance: 11.6, hours: "7:30 am – 3:00 pm", open: true, wait: 7, accent: "moss", note: "Quietest centre nearby" },
];

const slots = ["6:30 – 7:00 am", "7:00 – 7:30 am", "8:00 – 8:30 am", "9:30 – 10:00 am", "11:00 – 11:30 am"];

function Icon({ name, size = 20 }) {
  const paths = {
    arrow: <><path d="M4 12h15" /><path d="m13 6 6 6-6 6" /></>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    calendar: <><rect x="3" y="4.5" width="18" height="17" rx="2" /><path d="M16 2.5v4M8 2.5v4M3 9h18" /></>,
    clock: <><circle cx="12" cy="12" r="8.5" /><path d="M12 7v5l3.5 2" /></>,
    search: <><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 5 5" /></>,
    chevron: <path d="m7 10 5 5 5-5" />,
    check: <path d="m5 12 4.5 4.5L19 7" />,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4" /></>,
    home: <><path d="m3 10 9-7 9 7v10H3Z" /><path d="M9 20v-6h6v6" /></>,
    user: <><circle cx="12" cy="8" r="3.5" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
    leaf: <><path d="M20 4C11 4 5 7.5 5 14c0 3 2 5 5 5 6.5 0 10-6 10-15Z" /><path d="M4 21c3-5 7-8 13-11" /></>,
    close: <><path d="m6 6 12 12M18 6 6 18" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    chevronRight: <path d="m9 18 6-6-6-6" />,
    truck: <><path d="M3 6h11v11H3zM14 10h4l3 3v4h-7z" /><circle cx="7" cy="19" r="2" /><circle cx="18" cy="19" r="2" /></>,
    info: <><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></>,
  };
  return <svg className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function Logo({ onClick }) {
  return <button className="logo" onClick={onClick} data-testid="button-home"><span className="logo-mark"><Icon name="leaf" size={19} /></span><span className="logo-copy"><b>Farm<span className="logo-iq">IQ</span></b><small>CROP PROCUREMENT</small></span></button>;
}

function Header({ page, navigate, onMenu }) {
  return <header className="site-header">
    <div className="header-inner">
      <Logo onClick={() => navigate("home")} />
      <nav className="desktop-nav" aria-label="Primary navigation">
        <button className={page === "dashboard" ? "nav-link active" : "nav-link"} onClick={() => navigate("dashboard")} data-testid="link-dashboard">My dashboard</button>
        <button className={page === "centres" ? "nav-link active" : "nav-link"} onClick={() => navigate("centres")} data-testid="link-centres">Find a centre</button>
        <button className={page === "track" ? "nav-link active" : "nav-link"} onClick={() => navigate("track")} data-testid="link-track">My queue</button>
        <button className={page === "dashboard" ? "nav-link" : "nav-link"} onClick={() => navigate("dashboard")} data-testid="link-alerts">Alerts</button>
        <button className="language-button" onClick={() => navigate("home")} data-testid="button-language">English <Icon name="chevron" size={13} /></button>
        <button className="register-button" onClick={() => navigate("auth")} data-testid="button-register">Register</button>
      </nav>
      <div className="header-actions">
        <button className="mobile-menu" onClick={onMenu} aria-label="Open menu" data-testid="button-menu"><Icon name="menu" size={23} /></button>
      </div>
    </div>
  </header>;
}

function Footer({ navigate }) {
  return <footer className="site-footer"><div className="footer-inner"><div><Logo onClick={() => navigate("home")} /><p className="footer-copy">Making every collection day<br />a little more predictable.</p></div><div className="footer-links"><div><span className="footer-label">Explore</span><button onClick={() => navigate("centres")}>Find a centre</button><button onClick={() => navigate("track")}>Track booking</button></div><div><span className="footer-label">Need help?</span><button onClick={() => navigate("dashboard")}>Help & support</button><button onClick={() => navigate("auth")}>Sign in</button></div></div><div className="footer-note">Built for farmers,<br />one visit at a time.</div></div><div className="footer-bottom"><span>© 2024 FarmIQ</span><span>Simple tools for better farm days</span></div></footer>;
}

function Home({ navigate, booking }) {
  return <div className="page home-page">
    <section className="hero">
      <div className="hero-copy">
        <div className="eyebrow"><span className="eyebrow-line" /> A simpler way to sell at a government centre</div>
        <h1>Sell Your Crop at<br /><em>the Right Time</em></h1>
        <p className="hero-text">Check procurement schedules, get a time slot and track your queue.</p>
        <div className="hero-actions"><button className="button button-primary" onClick={() => navigate("centres")} data-testid="button-find-centre">Find a procurement centre <Icon name="arrow" size={17} /></button><button className="text-button" onClick={() => navigate("auth")} data-testid="button-register-farmer">Register as a farmer</button></div>
        <div className="trust-row"><span>No payment needed. Keep your farmer ID ready.</span></div>
      </div>
      <div className="hero-art" aria-label="Queue status at Ramanagara APMC">
        <div className="hero-card">
          <div className="mini-card-top"><span>Today at the centre</span><Icon name="clock" size={16} /></div>
          <strong>A-104</strong>
          <span className="queue-center-name">Your place in line · Ramanagara APMC</span>
          <div className="queue-bars"><i /><i /><i /><i /></div>
        </div>
      </div>
    </section>
    <section className="quick-strip"><div className="quick-intro"><span className="section-kicker">A better way to arrive</span><h2>Less waiting.<br /><em>More knowing.</em></h2></div><div className="quick-steps"><div className="step"><span className="step-num">01</span><div><h3>Choose a centre</h3><p>See what is close, open, and moving quickly.</p></div></div><div className="step"><span className="step-num">02</span><div><h3>Pick your time</h3><p>Reserve a slot around your farm's rhythm.</p></div></div><div className="step"><span className="step-num">03</span><div><h3>Arrive with confidence</h3><p>Use your token and know what to expect.</p></div></div></div></section>
    <section className="home-feature"><div className="feature-note"><span className="section-kicker">For today's trip</span><h2>Your next step<br /><em>is right here.</em></h2><p>FarmIQ keeps the details of your collection day in one calm, clear place.</p><button className="button button-outline" onClick={() => navigate(booking ? "track" : "centres")} data-testid="button-home-next">{booking ? "View my booking" : "Plan a collection"} <Icon name="arrow" size={16} /></button></div><div className="feature-panel"><div className="feature-panel-head"><span className="status-pill"><i /> {booking ? "Booking confirmed" : "Good morning, Ramesh"}</span><span className="date-label">Today · 24 Jun</span></div>{booking ? <div className="home-booking"><div className="booking-icon"><Icon name="calendar" size={23} /></div><div><b>{booking.centre.name}</b><p>{booking.date} · {booking.slot}</p></div><strong className="booking-token">#{booking.token}</strong></div> : <div className="empty-booking"><div className="empty-icon"><Icon name="calendar" size={22} /></div><div><b>No collection planned yet</b><p>It takes less than a minute to book your spot.</p></div><button onClick={() => navigate("centres")} data-testid="button-empty-booking"><Icon name="chevronRight" size={18} /></button></div>}<div className="weather-row"><span><span className="weather-swatch" /> Warm & clear</span><span>28°C</span><span className="weather-place">Kalyanpur</span></div></div></section>
    <section className="home-quote"><div className="quote-mark">“</div><blockquote>When you know your time,<br />the whole day feels lighter.</blockquote><span>— Meena Patil, Nashik</span></section>
    <Footer navigate={navigate} />
  </div>;
}

function PageIntro({ kicker, title, detail }) {
  return <div className="page-intro"><span className="section-kicker">{kicker}</span><h1>{title}</h1>{detail && <p>{detail}</p>}</div>;
}

function CentreCard({ centre, onBook }) {
  return <article className="centre-card" data-testid={`card-centre-${centre.id}`}><div className={`centre-illustration ${centre.accent}`}><div className="centre-sky" /><div className="centre-roof" /><div className="centre-building"><span /><span /><span /></div><div className="centre-ground" /></div><div className="centre-card-body"><div className="centre-meta"><span className={centre.open ? "open-badge" : "closed-badge"}><i /> {centre.open ? "Open now" : "Closed now"}</span><span className="distance"><Icon name="pin" size={14} /> {centre.distance} km</span></div><h3>{centre.name}</h3><p className="centre-area">{centre.area} · {centre.hours}</p><div className="centre-card-bottom"><span className="wait-time"><Icon name="clock" size={15} /><b>{centre.wait} min</b> current wait</span><button className="small-button" onClick={() => onBook(centre)} data-testid={`button-book-${centre.id}`}>Book a slot <Icon name="arrow" size={14} /></button></div><span className="centre-note">{centre.note}</span></div></article>;
}

function Centres({ navigate, selectCentre }) {
  const [query, setQuery] = useState("");
  const [openOnly, setOpenOnly] = useState(false);
  const [distance, setDistance] = useState("any");
  const filtered = useMemo(() => centres.filter((centre) => {
    const q = query.toLowerCase();
    return (!q || `${centre.name} ${centre.area}`.toLowerCase().includes(q)) && (!openOnly || centre.open) && (distance === "any" || centre.distance <= Number(distance));
  }), [query, openOnly, distance]);
  return <div className="page app-page"><div className="app-container"><PageIntro kicker="Collection centres" title={<>A good place to<br /><em>start nearby.</em></>} detail="Choose a centre that fits your route. You can see the live wait time before you book." /><div className="search-toolbar"><label className="search-field"><Icon name="search" size={19} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by village or centre name" data-testid="input-centre-search" /><span className="search-shortcut">⌘ K</span></label><button className={openOnly ? "filter-button selected" : "filter-button"} onClick={() => setOpenOnly(!openOnly)} data-testid="button-filter-open"><span className="filter-check"><Icon name="check" size={12} /></span> Open now</button><label className="select-wrap"><select value={distance} onChange={(e) => setDistance(e.target.value)} data-testid="select-distance"><option value="any">Any distance</option><option value="5">Within 5 km</option><option value="10">Within 10 km</option></select><Icon name="chevron" size={15} /></label></div><div className="results-line"><span><b>{filtered.length}</b> centres near Kalyanpur</span><span className="location-setting"><Icon name="pin" size={14} /> Using your location <button onClick={() => setQuery("")}>Change</button></span></div>{filtered.length ? <div className="centre-grid">{filtered.map((centre) => <CentreCard key={centre.id} centre={centre} onBook={(c) => { selectCentre(c); navigate("book"); }} />)}</div> : <div className="empty-state"><div className="empty-state-icon"><Icon name="search" size={26} /></div><h3>No centres match that search</h3><p>Try a nearby village or clear one of the filters.</p><button className="button button-outline" onClick={() => { setQuery(""); setOpenOnly(false); setDistance("any"); }}>Clear filters</button></div>}<div className="centre-help"><div className="help-icon"><Icon name="info" size={21} /></div><div><b>Not sure which centre to choose?</b><p>Pick the one with the shortest wait time, or the one on your usual route.</p></div><button onClick={() => navigate("how-it-works")}>How bookings work <Icon name="arrow" size={15} /></button></div></div></div>;
}

function Booking({ navigate, selectedCentre, setBooking }) {
  const centre = selectedCentre || centres[0];
  const [date, setDate] = useState("Today, 24 Jun");
  const [slot, setSlot] = useState("");
  const [produce, setProduce] = useState("Milk");
  const [quantity, setQuantity] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [step, setStep] = useState(1);
  const submit = (e) => {
    e.preventDefault();
    if (!slot || !quantity || !phone || phone.replace(/\D/g, "").length < 10) { setError("Please choose a time and fill in the details below."); return; }
    const next = { centre, date, slot, produce, quantity, phone, token: String(Math.floor(100 + Math.random() * 899)) };
    setBooking(next); navigate("track");
  };
  return <div className="page app-page booking-page"><div className="app-container narrow-container"><button className="back-link" onClick={() => navigate("centres")}><Icon name="chevronRight" size={16} /> Back to centres</button><div className="booking-header"><div><span className="section-kicker">Reserve a collection slot</span><h1>Plan your<br /><em>arrival.</em></h1></div><div className="progress-steps"><span className="active"><b>1</b> Choose</span><i /><span className={step > 1 ? "active" : ""}><b>2</b> Confirm</span></div></div><div className="booking-layout"><div className="booking-main"><div className="chosen-centre"><div className={`chosen-thumb ${centre.accent}`}><Icon name="leaf" size={22} /></div><div><span>Collection centre</span><b>{centre.name}</b><small><Icon name="pin" size={13} /> {centre.area} · {centre.distance} km away</small></div><button onClick={() => navigate("centres")} data-testid="button-change-centre">Change</button></div><form onSubmit={submit} className="booking-form"><div className="form-section"><span className="form-number">01</span><div className="form-section-content"><h3>When are you coming?</h3><p className="form-hint">Choose a day and time that works with your farm.</p><div className="date-row"><button type="button" className={date === "Today, 24 Jun" ? "date-choice selected" : "date-choice"} onClick={() => setDate("Today, 24 Jun")}><span>Today</span><b>24 Jun</b></button><button type="button" className={date === "Tomorrow, 25 Jun" ? "date-choice selected" : "date-choice"} onClick={() => setDate("Tomorrow, 25 Jun")}><span>Tomorrow</span><b>25 Jun</b></button><button type="button" className={date === "Wed, 26 Jun" ? "date-choice selected" : "date-choice"} onClick={() => setDate("Wed, 26 Jun")}><span>Wednesday</span><b>26 Jun</b></button></div><div className="slot-grid">{slots.map((item) => <button type="button" key={item} className={slot === item ? "slot-choice selected" : "slot-choice"} onClick={() => { setSlot(item); setStep(2); }} data-testid={`button-slot-${item.slice(0, 2)}`}>{item}<span>{item === "7:00 – 7:30 am" ? "Recommended" : "Available"}</span></button>)}</div></div></div><div className="form-section"><span className="form-number">02</span><div className="form-section-content"><h3>What are you bringing?</h3><p className="form-hint">This helps the centre prepare for your visit.</p><div className="field-row"><label>Produce<select value={produce} onChange={(e) => setProduce(e.target.value)} data-testid="select-produce"><option>Milk</option><option>Vegetables</option><option>Grain</option><option>Fruit</option></select><Icon name="chevron" size={15} /></label><label>Approx. quantity<div className="input-suffix"><input type="number" min="1" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="e.g. 120" data-testid="input-quantity" /><span>kg</span></div></label></div></div></div><div className="form-section"><span className="form-number">03</span><div className="form-section-content"><h3>How can we reach you?</h3><p className="form-hint">We'll send your queue token by SMS.</p><label className="full-label">Mobile number<div className="phone-input"><span>+91</span><input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="10 digit mobile number" data-testid="input-phone" /></div></label></div></div>{error && <div className="form-error" role="alert"><Icon name="info" size={17} /> {error}</div>}<button className="button button-primary booking-submit" type="submit" data-testid="button-confirm-booking">Confirm my slot <Icon name="arrow" size={17} /></button></form></div><aside className="booking-aside"><div className="aside-label">Your visit</div><div className="aside-centre"><span className="aside-icon"><Icon name="pin" size={18} /></span><div><b>{centre.area}</b><span>{centre.hours}</span></div></div><div className="aside-line" /><div className="aside-fact"><Icon name="clock" size={17} /><span>Current wait <b>{centre.wait} minutes</b></span></div><div className="aside-fact"><Icon name="truck" size={17} /><span>Bring your produce<br /><b>and a valid ID</b></span></div><div className="aside-tip"><span>Good to know</span><p>Arrive within 15 minutes of your slot. We'll hold your place in line.</p></div></aside></div></div></div>;
}

function Track({ navigate, booking }) {
  if (!booking) return <div className="page app-page"><div className="empty-state track-empty"><div className="empty-state-icon"><Icon name="calendar" size={26} /></div><h3>No active booking</h3><p>Choose a centre and reserve a time to see your queue token here.</p><button className="button button-primary" onClick={() => navigate("centres")}>Find a centre <Icon name="arrow" size={16} /></button></div></div>;
  return <div className="page app-page"><div className="app-container narrow-container"><div className="track-top"><div><span className="section-kicker">Your queue token</span><h1>You're all<br /><em>set.</em></h1></div><button className="button button-outline" onClick={() => navigate("dashboard")}><Icon name="bell" size={16} /> My dashboard</button></div><div className="token-card"><div className="token-card-head"><span><i className="live-dot" /> Live queue</span><span>Updated just now</span></div><div className="token-number"><small>Your token</small><strong>{booking.token}</strong><span>Arrive between <b>{booking.slot}</b></span></div><div className="queue-progress"><div className="queue-progress-label"><span>Now serving <b>#{Number(booking.token) - 4}</b></span><span><b>4 people</b> ahead of you</span></div><div className="queue-bar"><i style={{ width: "64%" }} /></div><div className="queue-estimate"><span>Estimated wait</span><b>18–24 min</b></div></div><div className="token-foot"><span><Icon name="pin" size={15} /> {booking.centre.name}</span><span><Icon name="calendar" size={15} /> {booking.date}</span></div></div><div className="what-next"><div className="next-head"><div><span className="section-kicker">What happens next</span><h2>Three simple steps.</h2></div><span className="next-note">We’ll keep this page updated.</span></div><div className="next-grid"><div className="next-step done"><span className="next-icon"><Icon name="check" size={19} /></span><div><b>Slot reserved</b><p>Your place is saved for {booking.slot}.</p></div></div><div className="next-step current"><span className="next-icon"><Icon name="pin" size={19} /></span><div><b>Make your way there</b><p>Bring your produce and a valid ID.</p></div></div><div className="next-step"><span className="next-icon"><Icon name="leaf" size={19} /></span><div><b>Check in at the centre</b><p>Show token <strong>#{booking.token}</strong> at the desk.</p></div></div></div></div><div className="track-actions"><button className="button button-primary" onClick={() => navigate("centres")}>Book another collection <Icon name="arrow" size={16} /></button><button className="text-button" onClick={() => navigate("dashboard")}>View notifications <Icon name="arrow" size={15} /></button></div></div></div>;
}

function Auth({ navigate, onLogin }) {
  const [register, setRegister] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const submit = (e) => { e.preventDefault(); if ((register && !name) || !phone || !password) { setError("Please fill in all the fields to continue."); return; } onLogin(name || "Ramesh Kumar"); navigate("dashboard"); };
  return <div className="auth-page"><div className="auth-art"><div className="auth-brand"><Logo onClick={() => navigate("home")} /></div><div className="auth-art-copy"><span className="section-kicker">A little more ease</span><h1>Good days<br /><em>start here.</em></h1><p>Keep your collection visits simple, clear, and on your terms.</p></div><div className="auth-sun" /><div className="auth-hills" /></div><div className="auth-panel"><button className="auth-back" onClick={() => navigate("home")}><Icon name="chevronRight" size={16} /> Back to home</button><div className="auth-form-wrap"><span className="section-kicker">{register ? "Create your account" : "Welcome back"}</span><h2>{register ? "Let's get started." : "Sign in to FarmIQ."}</h2><p className="auth-sub">{register ? "Your bookings and updates, all in one place." : "See your next collection at a glance."}</p><form onSubmit={submit}>{register && <label>Full name<input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Ramesh Kumar" data-testid="input-name" /></label>}<label>Mobile number<div className="phone-input"><span>+91</span><input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="10 digit mobile number" data-testid="input-login-phone" /></div></label><label>Password<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" data-testid="input-password" /></label>{error && <div className="form-error"><Icon name="info" size={16} /> {error}</div>}<button className="button button-primary auth-submit" type="submit" data-testid="button-auth-submit">{register ? "Create my account" : "Sign in"} <Icon name="arrow" size={16} /></button></form><div className="auth-switch">{register ? "Already have an account?" : "New to FarmIQ?"} <button onClick={() => { setRegister(!register); setError(""); }}>{register ? "Sign in" : "Create an account"}</button></div><p className="demo-note">Demo mode · No real account is created</p></div></div></div>;
}

function Dashboard({ navigate, booking, user }) {
  return <div className="page app-page"><div className="app-container dashboard-container"><div className="dashboard-greeting"><div><span className="section-kicker">Monday, 24 June 2024</span><h1>Good morning, <em>{user.split(" ")[0]}.</em></h1><p>Here’s what’s happening with your farm today.</p></div><button className="button button-primary" onClick={() => navigate("centres")}><span className="plus">+</span> New booking</button></div><div className="dashboard-grid"><section className="dashboard-main"><div className="dashboard-section-head"><h2>Next collection</h2><button onClick={() => navigate("track")}>View details <Icon name="arrow" size={14} /></button></div>{booking ? <div className="dashboard-booking"><div className="dash-booking-top"><span className="status-pill"><i /> Confirmed</span><span>Token <b>#{booking.token}</b></span></div><div className="dash-booking-body"><div className="dash-date"><strong>24</strong><span>JUN<br />MON</span></div><div><h3>{booking.centre.name}</h3><p><Icon name="clock" size={14} /> {booking.slot} <span className="dot-sep" /> <Icon name="pin" size={14} /> {booking.centre.area}</p><span className="produce-tag">{booking.produce} · {booking.quantity} kg</span></div></div><button className="dash-booking-footer" onClick={() => navigate("track")}>Track live queue <Icon name="arrow" size={15} /></button></div> : <div className="dashboard-empty"><span className="empty-icon"><Icon name="calendar" size={23} /></span><div><b>No upcoming collection</b><p>Ready to make your next trip easier?</p></div><button onClick={() => navigate("centres")}><Icon name="arrow" size={17} /></button></div>}<div className="dashboard-section-head recent-head"><h2>Recent activity</h2><button>See all <Icon name="arrow" size={14} /></button></div><div className="activity-list"><div><span className="activity-icon clay-icon"><Icon name="check" size={16} /></span><span><b>Collection completed</b><small>Haldi River Collection Centre · 18 Jun</small></span><strong>Milk · 86 kg</strong></div><div><span className="activity-icon green-icon"><Icon name="calendar" size={16} /></span><span><b>Booking cancelled</b><small>Sahyadri Farmers Hub · 11 Jun</small></span><strong className="muted-value">No charge</strong></div></div></section><aside className="dashboard-side"><div className="side-card profile-card"><div className="profile-head"><span className="big-avatar">RK</span><div><b>{user}</b><span>Farmer account</span></div><button onClick={() => navigate("auth")} aria-label="Edit profile">···</button></div><div className="profile-details"><span><small>Phone</small> +91 98••• 4421</span><span><small>Home village</small> Kalyanpur</span></div></div><div className="side-card updates-card"><div className="side-card-head"><h3>Updates for you</h3><span className="update-count">2</span></div><div className="update-item"><span className="update-mark"><Icon name="info" size={15} /></span><div><b>Peak hours tomorrow</b><p>Try arriving before 9:00 am for a shorter wait.</p><small>2 hours ago</small></div></div><div className="update-item"><span className="update-mark green"><Icon name="check" size={15} /></span><div><b>Booking confirmed</b><p>Your token will be ready when you arrive.</p><small>Yesterday</small></div></div><button className="all-updates" onClick={() => navigate("track")}>See all updates <Icon name="arrow" size={14} /></button></div></aside></div></div></div>;
}

function HowItWorks({ navigate }) {
  return <div className="page app-page how-page"><div className="app-container narrow-container"><button className="back-link" onClick={() => navigate("home")}><Icon name="chevronRight" size={16} /> Back home</button><PageIntro kicker="How FarmIQ works" title={<>Your visit,<br /><em>made clear.</em></>} detail="A few simple steps from your farm gate to the collection desk." /><div className="how-list"><div><span>01</span><div><h2>Find your centre</h2><p>Search by village, see opening hours and check today's estimated wait before you leave home.</p></div><Icon name="pin" size={25} /></div><div><span>02</span><div><h2>Choose your slot</h2><p>Pick a half-hour window. You can choose the time that fits around your animals, fields, and family.</p></div><Icon name="calendar" size={25} /></div><div><span>03</span><div><h2>Follow your token</h2><p>We'll give you a queue token and keep the live status handy, so you know when to set off.</p></div><Icon name="check" size={25} /></div></div><button className="button button-primary" onClick={() => navigate("centres")}>Find my centre <Icon name="arrow" size={16} /></button></div></div>;
}

function App() {
  const [page, setPage] = useState(() => window.location.pathname.split("/")[1] || "home");
  const [selectedCentre, setSelectedCentre] = useState(centres[0]);
  const [booking, setBooking] = useState(null);
  const [user, setUser] = useState("Ramesh Kumar");
  const [mobileNav, setMobileNav] = useState(false);
  const navigate = (next) => { const path = next === "home" ? "/" : `/${next}`; window.history.pushState({}, "", path); setPage(next); setMobileNav(false); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const current = page === "find" ? "centres" : page;
  let content;
  if (current === "centres") content = <Centres navigate={navigate} selectCentre={(c) => setSelectedCentre(c)} />;
  else if (current === "book") content = <Booking navigate={navigate} selectedCentre={selectedCentre} setBooking={setBooking} />;
  else if (current === "track") content = <Track navigate={navigate} booking={booking} />;
  else if (current === "auth" || current === "login" || current === "register") content = <Auth navigate={navigate} onLogin={setUser} />;
  else if (current === "dashboard") content = <Dashboard navigate={navigate} booking={booking} user={user} />;
  else if (current === "how-it-works") content = <HowItWorks navigate={navigate} />;
  else content = <Home navigate={navigate} booking={booking} />;
  const isAuth = ["auth", "login", "register"].includes(current);
  return <div className={`app-shell ${current === "home" ? "reference-home" : ""}`}>{!isAuth && <Header page={current} navigate={navigate} onMenu={() => setMobileNav(!mobileNav)} />}{!isAuth && <div className="demo-banner">Demonstration data for FarmIQ prototype — centre timings and queue numbers are examples.</div>}{mobileNav && <div className="mobile-nav"><button onClick={() => navigate("home")}>Home</button><button onClick={() => navigate("centres")}>Find a centre</button><button onClick={() => navigate("track")}>My queue</button><button onClick={() => navigate("dashboard")}>Alerts</button></div>}{content}</div>;
}

export default App;