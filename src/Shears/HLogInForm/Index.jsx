import { useState } from "react";

const Login = () => {
  const [role, setRole] = useState("");

  return (
    <section className="py-12 lg:py-16">
      <div className="section-container">
        <div className="mx-auto max-w-md">
          <div
            className="rounded-xl border border-border bg-card p-8
  shadow-[0_10px_30px_rgba(0,0,0,0.08)]
  hover:shadow-[0_14px_40px_rgba(0,0,0,0.12)]
  transition-shadow duration-300"
          >
            {" "}
            {/* FORM */}
            <form className="space-y-6">
              {/* ROLE SELECT */}
              <fieldset className="space-y-2">
                <legend className="text-sm font-medium">Select Role</legend>

                <div className="grid grid-cols-2 gap-3">
                  {/* Leadership */}
                  <button
                    type="button"
                    onClick={() => setRole("leadership")}
                    className={`flex items-center justify-center gap-2 rounded-lg border-2 p-4 transition-all cursor-pointer
                      ${
                        role === "leadership"
                          ? "border-[#79b9c1] bg-[#79b9c1]/10 text-[#79b9c1]"
                          : "border-border hover:border-[#79b9c1]"
                      }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z" />
                      <path d="M5 21h14" />
                    </svg>
                    <span className="font-medium">Leadership</span>
                  </button>

                  {/* Admin */}
                  <button
                    type="button"
                    onClick={() => setRole("admin")}
                    className={`flex items-center justify-center gap-2 rounded-lg border-2 p-4 transition-all cursor-pointer
                      ${
                        role === "admin"
                          ? "border-[#79b9c1] bg-[#79b9c1]/10 text-[#79b9c1]"
                          : "border-border hover:border-[#79b9c1]"
                      }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    <span className="font-medium">Admin</span>
                  </button>
                </div>
              </fieldset>

              {/* EMAIL */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  placeholder="you@organization.com"
                  className="h-10 w-full rounded-md border border-input px-3
                  focus:outline-none focus:ring-2 focus:ring-[#79b9c1] focus:border-[#79b9c1]"
                />
              </div>

              {/* PASSWORD */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="h-10 w-full rounded-md border border-input px-3
                  focus:outline-none focus:ring-2 focus:ring-[#79b9c1] focus:border-[#79b9c1]"
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={!role}
                className="h-12 w-full rounded-md bg-[#79b9c1]
                text-white font-medium transition cursor-pointer
                hover:bg-[#6aaab3] disabled:opacity-50"
              >
                Sign in
              </button>
            </form>
            {/* FOOTER */}
            <div className="mt-6 flex flex-col items-center gap-2 text-sm">
              <button className="text-muted-foreground hover:text-[#79b9c1] transition">
                Forgot password?
              </button>

              <div className="text-muted-foreground">
                Don&apos;t have an account?{" "}
                <a
                  href="/register"
                  className="font-medium text-[#79b9c1] hover:underline"
                >
                  Request access
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
