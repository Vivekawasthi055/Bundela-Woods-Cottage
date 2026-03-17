import React, { useState, useRef, useEffect } from "react";
import "./RoomsBookingWidget.css";

/* ─────────────────────────────────────────────
   CONSTANTS
───────────────────────────────────────────── */
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const MONTHS_SHORT = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const DAYS_SHORT = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

/* ─────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────── */
function toYMD(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}
function fromYMD(str) {
  if (!str) return null;
  const [y, m, d] = str.split("-").map(Number);
  return new Date(y, m - 1, d);
}
function isSameDay(a, b) {
  return a && b && a.toDateString() === b.toDateString();
}
function formatDisplay(ymd) {
  if (!ymd) return "";
  const d = fromYMD(ymd);
  return `${d.getDate()} ${MONTHS_SHORT[d.getMonth()]} ${d.getFullYear()}`;
}

/* ─────────────────────────────────────────────
   LUXURY CALENDAR (same logic, scoped CSS classes)
───────────────────────────────────────────── */
function RoomCalendar({ checkIn, checkOut, onSelect, mode }) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const initDate = (() => {
    if (mode === "checkOut" && checkOut) return fromYMD(checkOut);
    if (mode === "checkOut" && checkIn) return fromYMD(checkIn);
    if (checkIn) return fromYMD(checkIn);
    return today;
  })();

  const [viewYear, setViewYear] = useState(initDate.getFullYear());
  const [viewMonth, setViewMonth] = useState(initDate.getMonth());
  const [hovered, setHovered] = useState(null);

  const checkInDate = fromYMD(checkIn);
  const checkOutDate = fromYMD(checkOut);

  const firstDay = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const prevMonthDays = new Date(viewYear, viewMonth, 0).getDate();

  const prevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else setViewMonth((m) => m - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else setViewMonth((m) => m + 1);
  };

  const cells = [];
  for (let i = firstDay - 1; i >= 0; i--)
    cells.push({
      day: new Date(viewYear, viewMonth - 1, prevMonthDays - i),
      ghost: true,
    });
  for (let d = 1; d <= daysInMonth; d++)
    cells.push({ day: new Date(viewYear, viewMonth, d), ghost: false });
  const rem = cells.length % 7;
  if (rem !== 0)
    for (let d = 1; d <= 7 - rem; d++)
      cells.push({ day: new Date(viewYear, viewMonth + 1, d), ghost: true });

  const isInRange = (day) => {
    const end = hovered || checkOutDate;
    if (!checkInDate || !end) return false;
    return day > checkInDate && day < end;
  };

  const handleClick = (day, ghost) => {
    if (ghost) return;
    if (day < today) return;
    if (mode === "checkOut" && checkInDate && day <= checkInDate) return;
    onSelect(toYMD(day));
  };

  const getCellClass = ({ day, ghost }) => {
    let cls = "rc-cell";
    if (ghost) return cls + " rc-ghost";
    if (day < today) return cls + " rc-past";
    if (isSameDay(day, checkInDate)) return cls + " rc-checkin";
    if (isSameDay(day, checkOutDate)) return cls + " rc-checkout";
    if (isInRange(day)) return cls + " rc-range";
    if (isSameDay(day, today)) return cls + " rc-today";
    if (mode === "checkOut" && checkInDate && day <= checkInDate)
      return cls + " rc-disabled";
    return cls + " rc-active";
  };

  return (
    <div className="rc-cal">
      <div className="rc-cal-nav">
        <button type="button" className="rc-nav-btn" onClick={prevMonth}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <div className="rc-cal-heading">
          <span className="rc-cal-month">{MONTHS[viewMonth]}</span>
          <span className="rc-cal-year">{viewYear}</span>
        </div>
        <button type="button" className="rc-nav-btn" onClick={nextMonth}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
      <div className="rc-cal-grid">
        {DAYS_SHORT.map((d) => (
          <div key={d} className="rc-day-hdr">
            {d}
          </div>
        ))}
        {cells.map((cell, i) => (
          <div
            key={i}
            className={getCellClass(cell)}
            onClick={() => handleClick(cell.day, cell.ghost)}
            onMouseEnter={() =>
              !cell.ghost && cell.day >= today && setHovered(cell.day)
            }
            onMouseLeave={() => setHovered(null)}
          >
            <span className="rc-num">{cell.day.getDate()}</span>
          </div>
        ))}
      </div>
      <div className="rc-cal-summary">
        <div className="rc-sum-item">
          <span className="rc-sum-dot ci" />
          <span className="rc-sum-label">Check-in</span>
          <span className="rc-sum-val">
            {checkIn ? formatDisplay(checkIn) : "—"}
          </span>
        </div>
        <div className="rc-sum-sep">→</div>
        <div className="rc-sum-item">
          <span className="rc-sum-dot co" />
          <span className="rc-sum-label">Check-out</span>
          <span className="rc-sum-val">
            {checkOut ? formatDisplay(checkOut) : "—"}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   AGE PICKER (same logic, scoped CSS classes)
───────────────────────────────────────────── */
function RoomAgePicker({ value, onChange, index }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="rap-picker" ref={ref}>
      <button
        type="button"
        className={`rap-trigger ${open ? "open" : ""}`}
        onClick={() => setOpen((o) => !o)}
      >
        <div className="rap-trigger-left">
          <span className="rap-child-label">Child {index + 1}</span>
          <span className="rap-chosen">
            {value}
            <em> yrs</em>
          </span>
        </div>
        <svg
          className={`rap-arrow ${open ? "rotated" : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && (
        <div className="rap-dropdown">
          <div className="rap-drop-header">Select Age</div>
          <div className="rap-grid">
            {[...Array(18).keys()].map((n) => (
              <button
                key={n}
                type="button"
                className={`rap-chip ${Number(value) === n ? "rap-chip-sel" : ""}`}
                onClick={() => {
                  onChange(n);
                  setOpen(false);
                }}
              >
                <span className="rap-n">{n}</span>
                <span className="rap-u">{n <= 1 ? "yr" : "yrs"}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   ROOMS BOOKING WIDGET — MAIN COMPONENT
   Horizontal card layout, white + gold + forest green,
   floats up from hero, full-width pill design
───────────────────────────────────────────── */
function RoomsBookingWidget() {
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    adults: 2,
    children: 0,
  });
  const [childrenAges, setChildrenAges] = useState([]);
  const [agesSaved, setAgesSaved] = useState(false);
  const [dateError, setDateError] = useState("");
  const [openCal, setOpenCal] = useState(null);
  const widgetRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (widgetRef.current && !widgetRef.current.contains(e.target))
        setOpenCal(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleDateSelect = (ymd) => {
    setDateError("");
    if (openCal === "checkIn") {
      setFormData((prev) => ({
        ...prev,
        checkIn: ymd,
        checkOut: prev.checkOut && ymd >= prev.checkOut ? "" : prev.checkOut,
      }));
      setTimeout(() => setOpenCal("checkOut"), 200);
    } else {
      setFormData((prev) => ({ ...prev, checkOut: ymd }));
      setTimeout(() => setOpenCal(null), 150);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.checkIn || !formData.checkOut) {
      setDateError("Please select both check-in and check-out dates.");
      setTimeout(() => setDateError(""), 3000);
      return;
    }
    if (formData.checkIn >= formData.checkOut) {
      setDateError("Check-out must be after check-in.");
      setTimeout(() => setDateError(""), 2000);
      return;
    }
    setDateError("");
    let ageParams = "";
    childrenAges.forEach((a) => {
      ageParams += `&age=${a}`;
    });
    const url = `https://www.booking.com/hotel/in/bundela-woods-cottage-and-restaurant.en-gb.html?checkin=${formData.checkIn}&checkout=${formData.checkOut}&group_adults=${formData.adults}&group_children=${formData.children}${ageParams}`;
    window.open(url, "_blank");
  };

  const inc = (f) => {
    if (f === "children") {
      setFormData((p) => ({ ...p, children: p.children + 1 }));
      setChildrenAges((p) => [...p, 5]);
      setAgesSaved(false);
    } else {
      setFormData((p) => ({ ...p, [f]: p[f] + 1 }));
    }
  };

  const dec = (f) => {
    if (f === "children") {
      setFormData((p) => ({ ...p, children: Math.max(0, p.children - 1) }));
      setChildrenAges((p) => p.slice(0, -1));
      setAgesSaved(false);
    } else {
      setFormData((p) => ({
        ...p,
        [f]: Math.max(f === "adults" ? 1 : 0, p[f] - 1),
      }));
    }
  };

  /* Icons */
  const CalIcon = () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      width="16"
      height="16"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
  const PersonIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
    </svg>
  );
  const ChildIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
      <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm1 14h-2v-2h2v2zm0-4h-2V7h2v6z" />
    </svg>
  );

  const nights = (() => {
    if (!formData.checkIn || !formData.checkOut) return null;
    const d =
      (new Date(formData.checkOut) - new Date(formData.checkIn)) / 86400000;
    return d > 0 ? d : null;
  })();

  return (
    <div className="rbw-wrap" ref={widgetRef}>
      <div className="rbw-card">
        {/* ── TOP STRIP: title + nights badge ── */}
        <div className="rbw-topbar">
          <div className="rbw-title-group">
            <span className="rbw-leaf">🌿</span>
            <span className="rbw-title">Book Your Room</span>
            <span className="rbw-subtitle">Best Rate Guaranteed</span>
          </div>
          {nights && (
            <div className="rbw-nights-badge">
              <span className="rbw-nights-num">{nights}</span>
              <span className="rbw-nights-label">
                {nights === 1 ? "Night" : "Nights"}
              </span>
            </div>
          )}
        </div>

        {/* ── MAIN FORM ROW ── */}
        <form className="rbw-form" onSubmit={handleSubmit}>
          <div className="rbw-fields-row">
            {/* CHECK-IN */}
            <div
              className={`rbw-field rbw-date-field ${openCal === "checkIn" ? "rbw-field-active" : ""}`}
              onClick={() =>
                setOpenCal(openCal === "checkIn" ? null : "checkIn")
              }
            >
              <div className="rbw-field-icon">
                <CalIcon />
              </div>
              <div className="rbw-field-body">
                <span className="rbw-field-label">Check-in</span>
                <span
                  className={`rbw-field-val ${!formData.checkIn ? "rbw-field-ph" : ""}`}
                >
                  {formData.checkIn
                    ? formatDisplay(formData.checkIn)
                    : "Add date"}
                </span>
              </div>
              <svg
                className={`rbw-caret ${openCal === "checkIn" ? "up" : ""}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                width="14"
                height="14"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>

            <div className="rbw-field-divider" />

            {/* CHECK-OUT */}
            <div
              className={`rbw-field rbw-date-field ${openCal === "checkOut" ? "rbw-field-active" : ""} ${!formData.checkIn ? "rbw-field-disabled" : ""}`}
              onClick={() =>
                formData.checkIn &&
                setOpenCal(openCal === "checkOut" ? null : "checkOut")
              }
            >
              <div className="rbw-field-icon">
                <CalIcon />
              </div>
              <div className="rbw-field-body">
                <span className="rbw-field-label">Check-out</span>
                <span
                  className={`rbw-field-val ${!formData.checkOut ? "rbw-field-ph" : ""}`}
                >
                  {formData.checkOut
                    ? formatDisplay(formData.checkOut)
                    : "Add date"}
                </span>
              </div>
              <svg
                className={`rbw-caret ${openCal === "checkOut" ? "up" : ""}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                width="14"
                height="14"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>

            <div className="rbw-field-divider" />

            {/* ADULTS */}
            <div className="rbw-field rbw-guest-field">
              <div className="rbw-field-icon">
                <PersonIcon />
              </div>
              <div className="rbw-field-body">
                <span className="rbw-field-label">Adults</span>
                <div className="rbw-stepper">
                  <button
                    type="button"
                    className="rbw-step-btn"
                    onClick={() => dec("adults")}
                    disabled={formData.adults <= 1}
                  >
                    −
                  </button>
                  <span className="rbw-step-val">{formData.adults}</span>
                  <button
                    type="button"
                    className="rbw-step-btn"
                    onClick={() => inc("adults")}
                    disabled={formData.adults >= 6}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="rbw-field-divider" />

            {/* CHILDREN */}
            <div className="rbw-field rbw-guest-field">
              <div className="rbw-field-icon">
                <ChildIcon />
              </div>
              <div className="rbw-field-body">
                <span className="rbw-field-label">Children</span>
                <div className="rbw-stepper">
                  <button
                    type="button"
                    className="rbw-step-btn"
                    onClick={() => dec("children")}
                    disabled={formData.children <= 0}
                  >
                    −
                  </button>
                  <span className="rbw-step-val">{formData.children}</span>
                  <button
                    type="button"
                    className="rbw-step-btn"
                    onClick={() => inc("children")}
                    disabled={formData.children >= 4}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* SUBMIT */}
            <button type="submit" className="rbw-submit">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="18"
                height="18"
              >
                <path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z" />
              </svg>
              <span>
                Check
                <br />
                Availability
              </span>
            </button>
          </div>

          {/* ── CALENDAR POPUP ── */}
          {openCal && (
            <div className="rbw-cal-popup">
              <div className="rbw-cal-card">
                <div className="rbw-cal-tabs">
                  <button
                    type="button"
                    className={`rbw-tab ${openCal === "checkIn" ? "rbw-tab-active" : ""}`}
                    onClick={() => setOpenCal("checkIn")}
                  >
                    <CalIcon /> Arrival
                  </button>
                  <div className="rbw-tab-sep" />
                  <button
                    type="button"
                    className={`rbw-tab ${openCal === "checkOut" ? "rbw-tab-active" : ""}`}
                    onClick={() => formData.checkIn && setOpenCal("checkOut")}
                    style={{
                      opacity: formData.checkIn ? 1 : 0.4,
                      cursor: formData.checkIn ? "pointer" : "not-allowed",
                    }}
                  >
                    <CalIcon /> Departure
                  </button>
                  <button
                    type="button"
                    className="rbw-cal-close"
                    onClick={() => setOpenCal(null)}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      width="14"
                      height="14"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>
                <RoomCalendar
                  checkIn={formData.checkIn}
                  checkOut={formData.checkOut}
                  onSelect={handleDateSelect}
                  mode={openCal}
                />
              </div>
            </div>
          )}

          {/* ── CHILDREN AGES ── */}
          {formData.children > 0 && !agesSaved && (
            <div className="rbw-ages-panel">
              <div className="rbw-ages-hdr">
                <ChildIcon />
                <span>Age of Children</span>
                <button
                  type="button"
                  className="rbw-ages-close"
                  onClick={() => {
                    setFormData((p) => ({ ...p, children: 0 }));
                    setChildrenAges([]);
                    setAgesSaved(false);
                  }}
                  title="Close and remove children"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    width="13"
                    height="13"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
              <div className="rbw-ages-list">
                {childrenAges.map((age, idx) => (
                  <RoomAgePicker
                    key={idx}
                    index={idx}
                    value={age}
                    onChange={(val) => {
                      const u = [...childrenAges];
                      u[idx] = val;
                      setChildrenAges(u);
                    }}
                  />
                ))}
              </div>
              <button
                type="button"
                className="rbw-ages-save"
                onClick={() => setAgesSaved(true)}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="13"
                  height="13"
                >
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
                Save Ages
              </button>
            </div>
          )}
        </form>

        {/* ── DATE ERROR ── */}
        {dateError && <div className="rbw-error">{dateError}</div>}

        {/* ── BOTTOM TRUST BAR ── */}
        <div className="rbw-trustbar">
          <span>🔒 Secure</span>
          <span className="rbw-trust-dot">·</span>
          <span>💰 Best Price</span>
          <span className="rbw-trust-dot">·</span>
          <span>📞 24/7 Support</span>
        </div>
      </div>
    </div>
  );
}

export default RoomsBookingWidget;
