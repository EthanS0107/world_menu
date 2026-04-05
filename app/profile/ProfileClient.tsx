"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { User, Mail, Phone, MapPin, Globe, Lock, ArrowLeft, Sparkles } from "lucide-react";

const AUTH_DISABLED = true;

interface ProfileUser {
  id: string;
  email?: string | null;
  name?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  city?: string | null;
  country?: string | null;
  isActive?: boolean;
  isAdmin?: boolean;
}

export default function ProfileClient({ user }: { user: ProfileUser }) {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const [firstName, setFirstName] = useState(user.firstName || "");
  const [lastName, setLastName] = useState(user.lastName || "");
  const [phone, setPhone] = useState(user.phone || "");
  const [city, setCity] = useState(user.city || "");
  const [country, setCountry] = useState(user.country || "");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showPasswordSection, setShowPasswordSection] = useState(false);

  const handleSave = async () => {
    if (AUTH_DISABLED) {
      setError("Modification desactivee temporairement.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          phone,
          city,
          country,
          ...(showPasswordSection && newPassword
            ? { currentPassword, newPassword }
            : {}),
        }),
      });

      if (res.ok) {
        setSuccess("Profil mis a jour avec succes !");
        setIsEditing(false);
        setShowPasswordSection(false);
        setCurrentPassword("");
        setNewPassword("");
        router.refresh();
      } else {
        const data = await res.json();
        setError(data.error || "Erreur lors de la mise a jour");
      }
    } catch (_err) {
      setError("Une erreur est survenue.");
    } finally {
      setLoading(false);
    }
  };

  const initials =
    (firstName?.[0] || user.email?.[0] || "?").toUpperCase() +
    (lastName?.[0] || "").toUpperCase();

  return (
    <div className="relative min-h-screen bg-[#0a0a0f] px-4 py-12 md:px-6 md:py-16">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-[200px] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(200,164,94,0.06)_0%,transparent_70%)]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.04)_0%,transparent_70%)]" />
      </div>
      <div className="noise pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-2xl">
        {/* Header Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02]"
        >
          {/* Banner */}
          <div className="relative h-32 overflow-hidden bg-gradient-to-r from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(200,164,94,0.15)_0%,transparent_70%)]" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

            {/* Avatar */}
            <div className="absolute -bottom-12 left-8">
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-white/[0.08] bg-[#111118] font-display text-2xl font-bold text-accent shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
                {initials}
              </div>
            </div>
          </div>

          <div className="px-8 pb-6 pt-16">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="font-display text-2xl font-bold text-white">
                  {firstName || lastName
                    ? `${firstName} ${lastName}`.trim()
                    : user.email}
                </h1>
                <p className="mt-1 flex items-center gap-2 text-sm text-white/40">
                  <Mail className="h-3.5 w-3.5" />
                  {user.email}
                </p>
              </div>
              <div className="flex items-center gap-2">
                {user.isAdmin && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400">
                    <Sparkles className="h-3 w-3" />
                    Admin
                  </span>
                )}
                <span
                  className={`rounded-full border px-3 py-1 text-xs font-semibold ${
                    user.isActive || user.isAdmin
                      ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                      : "border-white/[0.06] bg-white/[0.03] text-white/40"
                  }`}
                >
                  {user.isActive || user.isAdmin ? "Abonne" : "Non abonne"}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Messages */}
        {success && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-5 py-4 text-sm font-medium text-emerald-400"
          >
            {success}
          </motion.div>
        )}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 rounded-2xl border border-red-500/20 bg-red-500/10 px-5 py-4 text-sm font-medium text-red-400"
          >
            {error}
          </motion.div>
        )}

        {/* Informations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8"
        >
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-px w-6 bg-accent" />
              <h2 className="text-base font-semibold text-white">
                Informations personnelles
              </h2>
            </div>
            {!isEditing && !AUTH_DISABLED && (
              <button
                onClick={() => setIsEditing(true)}
                className="rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/60 transition-all hover:bg-white/[0.08] hover:text-white"
              >
                Modifier
              </button>
            )}
          </div>

          {AUTH_DISABLED && (
            <div className="mb-6 rounded-xl border border-amber-500/15 bg-amber-500/5 px-5 py-4 text-sm text-amber-400/80">
              Connexion desactivee temporairement : profil affiche en lecture
              seule.
            </div>
          )}

          {isEditing ? (
            <div className="space-y-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <InputField
                  label="Prenom"
                  icon={<User className="h-4 w-4" />}
                  value={firstName}
                  onChange={setFirstName}
                  placeholder="Votre prenom"
                />
                <InputField
                  label="Nom"
                  icon={<User className="h-4 w-4" />}
                  value={lastName}
                  onChange={setLastName}
                  placeholder="Votre nom"
                />
              </div>

              <InputField
                label="Email"
                icon={<Mail className="h-4 w-4" />}
                value={user.email || ""}
                disabled
                hint="L&apos;email ne peut pas etre modifie"
              />

              <InputField
                label="Telephone"
                icon={<Phone className="h-4 w-4" />}
                value={phone}
                onChange={setPhone}
                placeholder="+33 6 12 34 56 78"
                optional
              />

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <InputField
                  label="Ville"
                  icon={<MapPin className="h-4 w-4" />}
                  value={city}
                  onChange={setCity}
                  placeholder="Paris"
                  optional
                />
                <InputField
                  label="Pays"
                  icon={<Globe className="h-4 w-4" />}
                  value={country}
                  onChange={setCountry}
                  placeholder="France"
                  optional
                />
              </div>

              {/* Password Section */}
              <div className="border-t border-white/[0.06] pt-5">
                <button
                  type="button"
                  onClick={() => setShowPasswordSection(!showPasswordSection)}
                  className="flex items-center gap-2 text-sm font-medium text-white/50 transition-colors hover:text-accent-light"
                >
                  <Lock className="h-3.5 w-3.5" />
                  {showPasswordSection
                    ? "Annuler le changement de mot de passe"
                    : "Changer le mot de passe"}
                </button>

                {showPasswordSection && (
                  <div className="mt-4 space-y-4">
                    <InputField
                      label="Mot de passe actuel"
                      icon={<Lock className="h-4 w-4" />}
                      value={currentPassword}
                      onChange={setCurrentPassword}
                      placeholder="••••••••"
                      type="password"
                    />
                    <InputField
                      label="Nouveau mot de passe"
                      icon={<Lock className="h-4 w-4" />}
                      value={newPassword}
                      onChange={setNewPassword}
                      placeholder="••••••••"
                      type="password"
                    />
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4">
                <button
                  onClick={handleSave}
                  disabled={loading}
                  className="flex-1 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-[#0a0a0f] shadow-[0_4px_20px_rgba(200,164,94,0.25)] transition-all hover:shadow-[0_4px_30px_rgba(200,164,94,0.35)] disabled:opacity-50"
                >
                  {loading ? "Enregistrement..." : "Enregistrer"}
                </button>
                <button
                  onClick={() => {
                    setIsEditing(false);
                    setShowPasswordSection(false);
                    setFirstName(user.firstName || "");
                    setLastName(user.lastName || "");
                    setPhone(user.phone || "");
                    setCity(user.city || "");
                    setCountry(user.country || "");
                    setCurrentPassword("");
                    setNewPassword("");
                    setError("");
                  }}
                  className="rounded-xl border border-white/[0.08] bg-white/[0.04] px-6 py-3 text-sm font-medium text-white/60 transition-all hover:bg-white/[0.08] hover:text-white"
                >
                  Annuler
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-1">
              <ProfileField
                icon={<User className="h-4 w-4" />}
                label="Prenom"
                value={firstName}
              />
              <ProfileField
                icon={<User className="h-4 w-4" />}
                label="Nom"
                value={lastName}
              />
              <ProfileField
                icon={<Mail className="h-4 w-4" />}
                label="Email"
                value={user.email || ""}
              />
              <ProfileField
                icon={<Phone className="h-4 w-4" />}
                label="Telephone"
                value={phone}
                optional
              />
              <ProfileField
                icon={<MapPin className="h-4 w-4" />}
                label="Ville"
                value={city}
                optional
              />
              <ProfileField
                icon={<Globe className="h-4 w-4" />}
                label="Pays"
                value={country}
                optional
              />
              <ProfileField
                icon={<Lock className="h-4 w-4" />}
                label="Mot de passe"
                value="••••••••"
              />
            </div>
          )}
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <Link
            href={user.isActive || user.isAdmin ? "/menu" : "/"}
            className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-6 py-3 text-sm font-medium text-white/60 transition-all hover:bg-white/[0.06] hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour a l&apos;accueil
          </Link>
          <Link
            href="/"
            className="flex flex-1 items-center justify-center rounded-2xl border border-accent/20 bg-accent/5 px-6 py-3 text-sm font-medium text-accent-light transition-all hover:bg-accent/10"
          >
            Continuer la visite
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

function InputField({
  label,
  icon,
  value,
  onChange,
  placeholder,
  disabled,
  hint,
  optional,
  type = "text",
}: {
  label: string;
  icon: React.ReactNode;
  value: string;
  onChange?: (val: string) => void;
  placeholder?: string;
  disabled?: boolean;
  hint?: string;
  optional?: boolean;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-white/50">
        {icon}
        {label}
        {optional && (
          <span className="font-normal text-white/25">(optionnel)</span>
        )}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white/90 placeholder:text-white/25 outline-none transition-all focus:border-accent/40 focus:bg-white/[0.06] focus:shadow-[0_0_0_3px_rgba(200,164,94,0.08)] ${
          disabled ? "cursor-not-allowed text-white/30" : ""
        }`}
      />
      {hint && <p className="mt-1 text-xs text-white/25">{hint}</p>}
    </div>
  );
}

function ProfileField({
  icon,
  label,
  value,
  optional,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  optional?: boolean;
}) {
  return (
    <div className="flex items-center border-b border-white/[0.04] py-3.5 last:border-0">
      <span className="flex w-36 shrink-0 items-center gap-2 text-sm text-white/40">
        {icon}
        {label}
      </span>
      <span
        className={`text-sm ${
          value && value !== "••••••••"
            ? "font-medium text-white/80"
            : "text-white/25 italic"
        }`}
      >
        {value || (optional ? "Non renseigne" : "Non renseigne")}
      </span>
    </div>
  );
}
