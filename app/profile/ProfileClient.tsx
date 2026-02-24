"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import Link from "next/link";

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
        setSuccess("Profil mis à jour avec succès !");
        setIsEditing(false);
        setShowPasswordSection(false);
        setCurrentPassword("");
        setNewPassword("");
        router.refresh();
      } else {
        const data = await res.json();
        setError(data.error || "Erreur lors de la mise à jour");
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-teal-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-6">
          {/* Banner */}
          <div className="h-32 bg-gradient-to-r from-indigo-600 to-teal-500 relative">
            <div className="absolute -bottom-12 left-8">
              <div className="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center text-2xl font-black text-indigo-600 border-4 border-white">
                {initials}
              </div>
            </div>
          </div>

          <div className="pt-16 pb-6 px-8">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {firstName || lastName
                    ? `${firstName} ${lastName}`.trim()
                    : user.email}
                </h1>
                <p className="text-gray-500 text-sm mt-1">{user.email}</p>
              </div>
              <div className="flex items-center gap-2">
                {user.isAdmin && (
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full">
                    Admin
                  </span>
                )}
                <span
                  className={`px-3 py-1 text-xs font-bold rounded-full ${
                    user.isActive || user.isAdmin
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {user.isActive || user.isAdmin ? "Abonné" : "Non abonné"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Messages */}
        {success && (
          <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-5 py-4 rounded-2xl text-sm font-medium">
            {success}
          </div>
        )}
        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 text-red-600 px-5 py-4 rounded-2xl text-sm font-medium">
            {error}
          </div>
        )}

        {/* Informations */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">
              Informations personnelles
            </h2>
            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 text-sm font-semibold text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all"
              >
                Modifier
              </button>
            )}
          </div>

          {isEditing ? (
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1.5">
                    Prénom
                  </label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Votre prénom"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1.5">
                    Nom
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Votre nom"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  value={user.email || ""}
                  disabled
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-400 bg-gray-100 cursor-not-allowed"
                />
                <p className="text-xs text-gray-400 mt-1">
                  L'email ne peut pas être modifié
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1.5">
                  Téléphone{" "}
                  <span className="text-gray-400 font-normal">(optionnel)</span>
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+33 6 12 34 56 78"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1.5">
                    Ville{" "}
                    <span className="text-gray-400 font-normal">
                      (optionnel)
                    </span>
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Paris"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1.5">
                    Pays{" "}
                    <span className="text-gray-400 font-normal">
                      (optionnel)
                    </span>
                  </label>
                  <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="France"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                  />
                </div>
              </div>

              {/* Password Section */}
              <div className="border-t pt-5 mt-5">
                <button
                  type="button"
                  onClick={() => setShowPasswordSection(!showPasswordSection)}
                  className="text-sm font-semibold text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  {showPasswordSection
                    ? "Annuler le changement de mot de passe"
                    : "Changer le mot de passe"}
                </button>

                {showPasswordSection && (
                  <div className="mt-4 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1.5">
                        Mot de passe actuel
                      </label>
                      <input
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1.5">
                        Nouveau mot de passe
                      </label>
                      <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4">
                <button
                  onClick={handleSave}
                  disabled={loading}
                  className="flex-1 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 disabled:opacity-50 transition-all"
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
                  className="px-6 py-3 text-sm font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all"
                >
                  Annuler
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <ProfileField label="Prénom" value={firstName} />
              <ProfileField label="Nom" value={lastName} />
              <ProfileField label="Email" value={user.email || ""} />
              <ProfileField label="Téléphone" value={phone} optional />
              <ProfileField label="Ville" value={city} optional />
              <ProfileField label="Pays" value={country} optional />
              <ProfileField label="Mot de passe" value="••••••••" />
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href={user.isActive || user.isAdmin ? "/menu" : "/"}
            className="flex-1 text-center flex items-center justify-center px-6 py-3 bg-white border border-gray-200 text-gray-700 font-semibold rounded-2xl shadow-sm hover:shadow-md transition-all text-sm"
          >
            Retour à l'accueil
          </Link>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="flex-1 px-6 py-3 bg-red-50 border border-red-200 text-red-600 font-semibold rounded-2xl hover:bg-red-100 transition-all text-sm"
          >
            Se déconnecter
          </button>
        </div>
      </div>
    </div>
  );
}

function ProfileField({
  label,
  value,
  optional,
}: {
  label: string;
  value: string;
  optional?: boolean;
}) {
  return (
    <div className="flex items-center py-3 border-b border-gray-50 last:border-0">
      <span className="text-sm font-medium text-gray-500 w-32 shrink-0">
        {label}
      </span>
      <span
        className={`text-sm ${
          value ? "text-gray-900 font-medium" : "text-gray-300 italic"
        }`}
      >
        {value || (optional ? "Non renseigné" : "Non renseigné")}
      </span>
    </div>
  );
}
