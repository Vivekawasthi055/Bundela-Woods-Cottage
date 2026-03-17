import React, { useState, useRef, useEffect } from "react";
import "./BookingWidget.css";

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
   LUXURY CALENDAR
───────────────────────────────────────────── */
function LuxuryCalendar({ checkIn, checkOut, onSelect, mode }) {
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
    let cls = "cal-cell";
    if (ghost) return cls + " cal-ghost";
    if (day < today) return cls + " cal-past";
    if (isSameDay(day, checkInDate)) return cls + " cal-checkin";
    if (isSameDay(day, checkOutDate)) return cls + " cal-checkout";
    if (isInRange(day)) return cls + " cal-range";
    if (isSameDay(day, today)) return cls + " cal-today";
    if (mode === "checkOut" && checkInDate && day <= checkInDate)
      return cls + " cal-disabled";
    return cls + " cal-active";
  };

  return (
    <div className="lux-cal">
      <div className="lux-cal-nav">
        <button type="button" className="lux-nav-btn" onClick={prevMonth}>
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
        <div className="lux-cal-heading">
          <span className="lux-cal-month">{MONTHS[viewMonth]}</span>
          <span className="lux-cal-year">{viewYear}</span>
        </div>
        <button type="button" className="lux-nav-btn" onClick={nextMonth}>
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
      <div className="lux-cal-grid">
        {DAYS_SHORT.map((d) => (
          <div key={d} className="lux-day-hdr">
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
            <span className="cal-num">{cell.day.getDate()}</span>
          </div>
        ))}
      </div>
      <div className="lux-cal-summary">
        <div className="lux-sum-item">
          <span className="lux-sum-dot ci" />
          <span className="lux-sum-label">Check-in</span>
          <span className="lux-sum-val">
            {checkIn ? formatDisplay(checkIn) : "—"}
          </span>
        </div>
        <div className="lux-sum-sep">→</div>
        <div className="lux-sum-item">
          <span className="lux-sum-dot co" />
          <span className="lux-sum-label">Check-out</span>
          <span className="lux-sum-val">
            {checkOut ? formatDisplay(checkOut) : "—"}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   AGE PICKER
───────────────────────────────────────────── */
function AgePicker({ value, onChange, index }) {
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
    <div className="age-picker" ref={ref}>
      <button
        type="button"
        className={`age-trigger ${open ? "open" : ""}`}
        onClick={() => setOpen((o) => !o)}
      >
        <div className="age-trigger-left">
          <span className="age-child-label">Child {index + 1}</span>
          <span className="age-chosen">
            {value}
            <em> yrs</em>
          </span>
        </div>
        <svg
          className={`age-arrow ${open ? "rotated" : ""}`}
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
        <div className="age-dropdown">
          <div className="age-drop-header">Select Age</div>
          <div className="age-grid">
            {[...Array(18).keys()].map((n) => (
              <button
                key={n}
                type="button"
                className={`age-chip ${Number(value) === n ? "age-chip-sel" : ""}`}
                onClick={() => {
                  onChange(n);
                  setOpen(false);
                }}
              >
                <span className="age-n">{n}</span>
                <span className="age-u">{n <= 1 ? "yr" : "yrs"}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN WIDGET
───────────────────────────────────────────── */
function BookingWidget() {
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
      setTimeout(() => {
        setDateError("");
      }, 3000);
      return;
    }
    if (formData.checkIn >= formData.checkOut) {
      setDateError("Check-out must be after check-in.");
      setTimeout(() => {
        setDateError("");
      }, 2000);
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
      // Only append default age for the NEW child — existing ages preserved
      setChildrenAges((p) => [...p, 5]);
      setAgesSaved(false);
    } else {
      setFormData((p) => ({ ...p, [f]: p[f] + 1 }));
    }
  };

  const dec = (f) => {
    if (f === "children") {
      setFormData((p) => ({ ...p, children: Math.max(0, p.children - 1) }));
      // Only remove last child's age — existing ages preserved
      setChildrenAges((p) => p.slice(0, -1));
      setAgesSaved(false);
    } else {
      setFormData((p) => ({
        ...p,
        [f]: Math.max(f === "adults" ? 1 : 0, p[f] - 1),
      }));
    }
  };

  const calSVG = (
    <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
      <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
    </svg>
  );

  return (
    <div className="bw-container" ref={widgetRef}>
      {/* Header — sidebar only */}
      <div className="bw-header">
        <h3>Book Your Stay</h3>
        <p>Best Rates Guaranteed</p>
      </div>

      <form className="bw-form" onSubmit={handleSubmit}>
        {/* ── DATE FIELDS ── */}
        <div className="bw-field-group">
          {/* CHECK-IN */}
          <div
            className={`bw-field-half bw-date-half ${openCal === "checkIn" ? "date-half-open" : ""}`}
            onClick={() => setOpenCal(openCal === "checkIn" ? null : "checkIn")}
            style={{ cursor: "pointer" }}
          >
            <label>{calSVG} Check-in</label>
            <div className="bw-guest-counter date-counter">
              <span
                className={`date-counter-val ${!formData.checkIn ? "date-counter-ph" : ""}`}
              >
                {formData.checkIn ? formatDisplay(formData.checkIn) : "Select"}
              </span>
              <svg
                className={`date-caret ${openCal === "checkIn" ? "date-caret-up" : ""}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>

          {/* CHECK-OUT */}
          <div
            className={`bw-field-half bw-date-half ${openCal === "checkOut" ? "date-half-open" : ""} ${!formData.checkIn ? "date-half-disabled" : ""}`}
            onClick={() =>
              formData.checkIn &&
              setOpenCal(openCal === "checkOut" ? null : "checkOut")
            }
            style={{ cursor: formData.checkIn ? "pointer" : "not-allowed" }}
          >
            <label>{calSVG} Check-out</label>
            <div className="bw-guest-counter date-counter">
              <span
                className={`date-counter-val ${!formData.checkOut ? "date-counter-ph" : ""}`}
              >
                {formData.checkOut
                  ? formatDisplay(formData.checkOut)
                  : "Select"}
              </span>
              <svg
                className={`date-caret ${openCal === "checkOut" ? "date-caret-up" : ""}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>
        </div>

        {/* ── CALENDAR POPUP ── */}
        {openCal && (
          <div className="cal-popup-wrap">
            <div className="cal-popup-card">
              <div className="cal-popup-tabs">
                <button
                  type="button"
                  className={`cal-tab-btn ${openCal === "checkIn" ? "cal-tab-active" : ""}`}
                  onClick={() => setOpenCal("checkIn")}
                >
                  {calSVG} Arrival
                </button>
                <div className="cal-tab-divider" />
                <button
                  type="button"
                  className={`cal-tab-btn ${openCal === "checkOut" ? "cal-tab-active" : ""}`}
                  onClick={() => formData.checkIn && setOpenCal("checkOut")}
                  style={{
                    opacity: formData.checkIn ? 1 : 0.4,
                    cursor: formData.checkIn ? "pointer" : "not-allowed",
                  }}
                >
                  {calSVG} Departure
                </button>
                <button
                  type="button"
                  className="cal-close-btn"
                  onClick={() => setOpenCal(null)}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    width="15"
                    height="15"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
              <LuxuryCalendar
                checkIn={formData.checkIn}
                checkOut={formData.checkOut}
                onSelect={handleDateSelect}
                mode={openCal}
              />
            </div>
          </div>
        )}

        {/* ── GUESTS ── */}
        <div className="bw-field-group">
          <div className="bw-field-half">
            <label>
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="13"
                height="13"
              >
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
              </svg>
              Adults
            </label>
            <div className="bw-guest-counter">
              <button
                type="button"
                onClick={() => dec("adults")}
                disabled={formData.adults <= 1}
              >
                −
              </button>
              <span>{formData.adults}</span>
              <button
                type="button"
                onClick={() => inc("adults")}
                disabled={formData.adults >= 6}
              >
                +
              </button>
            </div>
          </div>
          <div className="bw-field-half">
            <label>
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="13"
                height="13"
              >
                <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm1 14h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>
              Children
            </label>
            <div className="bw-guest-counter">
              <button
                type="button"
                onClick={() => dec("children")}
                disabled={formData.children <= 0}
              >
                −
              </button>
              <span>{formData.children}</span>
              <button
                type="button"
                onClick={() => inc("children")}
                disabled={formData.children >= 4}
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* ── CHILDREN AGES ── */}
        {formData.children > 0 && !agesSaved && (
          <div className="bw-children-ages">
            <div className="children-age-hdr">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="13"
                height="13"
              >
                <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm1 14h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>
              Age of Children
              <button
                type="button"
                className="age-section-close"
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

            <div className="age-pickers-list">
              {childrenAges.map((age, idx) => (
                <AgePicker
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
              className="age-save-btn"
              onClick={() => setAgesSaved(true)}
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="14"
                height="14"
              >
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
              Save Ages
            </button>
          </div>
        )}

        {/* ── SUBMIT ── */}
        <button type="submit" className="bw-submit-btn">
          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
            <path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z" />
          </svg>
          Check Availability
        </button>
      </form>

      {dateError && <p className="bw-date-error">{dateError}</p>}

      <div className="bw-footer">
        <p>
          🔒 Secure booking &nbsp;·&nbsp; 💰 Best price guarantee &nbsp;·&nbsp;
          📞 24/7 support
        </p>
      </div>
    </div>
  );
}

export default BookingWidget;
