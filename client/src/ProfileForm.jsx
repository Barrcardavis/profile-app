import { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import "./ProfileForm.css";

export default function ProfileForm() {
  const queryClient = useQueryClient();
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isDirty }
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      bio: "",
      notifications: false
    }
  });

  // -----------------------------
  // LOAD PROFILE (useQuery)
  // -----------------------------
  const { isLoading } = useQuery({
    queryKey: ["userProfile"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3001/profile");
      if (!res.ok) throw new Error("Failed to load profile");
      return res.json();
    },
    onSuccess: (profile) => {
      reset(profile);
    }
  });

  // -----------------------------
  // UPDATE PROFILE (useMutation)
  // -----------------------------
  const mutation = useMutation({
    mutationFn: async (updatedData) => {
      // Simulate server-side email conflict
      if (updatedData.email === "conflict@example.com") {
        throw { field: "email", message: "This email is already taken." };
      }

      const res = await fetch("http://localhost:3001/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData)
      });

      if (!res.ok) throw new Error("Failed to update profile");
      return res.json();
    },

    onSuccess: (updated) => {
      queryClient.invalidateQueries(["userProfile"]);
      reset(updated);

      setSuccessMessage("✅ Profile updated successfully!");
      setTimeout(() => setSuccessMessage(""), 3000);
    },

    onError: (err) => {
      if (err.field === "email") {
        setError("email", { message: err.message });
      } else {
        alert("Update failed");
      }
    }
  });

  const onSubmit = (formData) => {
    mutation.mutate(formData);
  };

  if (isLoading) return <p>Loading profile...</p>;

  return (
    <div style={{ maxWidth: 450, margin: "0 auto" }}>
      {/* SUCCESS BANNER */}
      {successMessage && (
        <div
          style={{
            backgroundColor: "#dff6dd",
            color: "#107c10",
            padding: "10px",
            borderRadius: "4px",
            marginBottom: "12px",
            textAlign: "center",
            fontWeight: "500"
          }}
        >
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>User Profile</h2>

        {/* USERNAME */}
        <label>Username</label>
        <input
          {...register("username", { required: "Username is required" })}
        />
        {errors.username && (
          <p style={{ color: "red" }}>{errors.username.message}</p>
        )}

        {/* EMAIL */}
        <label>Email</label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email format" }
          })}
        />
        {errors.email && (
          <p style={{ color: "red" }}>{errors.email.message}</p>
        )}

        {/* BIO */}
        <label>Bio</label>
        <textarea {...register("bio")} rows={4} />

        {/* NOTIFICATIONS */}
        <label>
          <input type="checkbox" {...register("notifications")} />
          Enable Notifications
        </label>

        {/* SAVE BUTTON */}
        <button type="submit" disabled={!isDirty || mutation.isPending}>
          {mutation.isPending ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
}
